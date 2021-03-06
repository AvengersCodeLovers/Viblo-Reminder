import ApiService from '../services/api';
import TimeHelper from '../utils/datetime.utils';
import File from '../utils/file';
import { IUserResponse } from '../interfaces/response/IUserResponse';
import ChatWork from '../utils/chatwork';

class VibloModule {
  public apiService: ApiService;
  public timeHelper: TimeHelper;
  public storage: File;
  public chatwork: ChatWork;

  constructor(
    public api: ApiService,
    public time: TimeHelper,
    public file: File,
    public cw: ChatWork
  ) {
    this.apiService = api;
    this.timeHelper = time;
    this.storage = file;
    this.chatwork = cw;
  }

  public getOrganizationsStatsFromLastMonth(groupSlug: string): any {
    const time = this.timeHelper.getLastMonth();
    this.apiService
      .getOrganizationsStats(groupSlug, time.fromLastMonth, time.toLastMonth)
      .then((res) => {
        const users: IUserResponse[] = res.data.users
          .sort((a, b) =>
            a.total_viblo_postviews < b.total_viblo_postviews ? 1 : -1
          )
          .slice(0, 5);

        this.getPostsByUser(users);
      });
  }

  async getPostsByUser(collect: IUserResponse[]): Promise<any> {
    const time = this.timeHelper.getLastMonth();
    const selfTime = this.timeHelper;
    const arrResult = [];
    for await (const user of collect) {
      await this.apiService
        .getPostsByUser(user.username)
        .then(function (response) {
          const data = response.data.data
            .filter((x) => {
              return (
                selfTime.formatYearMonth(x.published_at) === time.lastMonth
              );
            })
            .sort((a, b) => (a.views_count < b.views_count ? 1 : -1));

          arrResult.push(data[0].url);
        });
    }
    this.storage.writePosts(arrResult);
  }

  public fetchPost(groupSlug: string): void {
    console.log('Clean data');
    this.storage.writePosts([]);
    this.getOrganizationsStatsFromLastMonth(groupSlug);
  }

  public async notify(groupSlug: string): Promise<void> {
    const data: string = await this.storage.readPosts();
    const url = data.split(',');
    if (url.length > 1) {
      const { fromLastMonth, toLastMonth } = this.timeHelper.getLastMonth();
      this.apiService
        .getOrganizationsStats(groupSlug, fromLastMonth, toLastMonth)
        .then((res) => {
          const users: IUserResponse[] = res.data.users.sort((a, b) =>
            a.total_viblo_postviews < b.total_viblo_postviews ? 1 : -1
          );

          this.template(users, url);
        });
    }
  }

  public template(result: IUserResponse[], url: string[]): void {
    const { monthYear, nowYear } = this.timeHelper.getMonthYear();
    const template = `[toall][info][title]Thống kê bài viết trên Viblo của Avengers Group (https://viblo.asia/o/avengers-group) tháng ${monthYear}[/title]1. ${result[0].name} (${url[0]}): ${result[0].total_viblo_postviews} Post views (*)
2. ${result[1].name} (${url[1]}): ${result[1].total_viblo_postviews} Post views 
3. ${result[2].name} (${url[2]}): ${result[2].total_viblo_postviews} Post views 
4. ${result[3].name} (${url[3]}): ${result[3].total_viblo_postviews} Post views 
5. ${result[4].name} (${url[4]}): ${result[4].total_viblo_postviews} Post views
[hr] Xin chúc mừng bạn ${result[0].name} (${result[0].url}) đã xuất sắc dẫn đầu số lượng Postviews tháng ${monthYear} và giành phần quà miễn quỹ Group tháng ${nowYear}
[hr]Avengers Group - Be Your Own Hero! (quyettam)[/info]`;

    return this.chatwork.send(template);
  }
}

export default VibloModule;
