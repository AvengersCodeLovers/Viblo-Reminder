import ApiService from "../services/api";
import TimeHelper from "../utils/datetime.utils";
import * as fs from "fs";
import { IUserResponse } from "../interfaces/response/IUserResponse";

class VibloModule {
  public apiService: ApiService;
  public timeHelper: TimeHelper;

  constructor(public api: ApiService, public time: TimeHelper) {
    this.apiService = api;
    this.timeHelper = time;
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
  }
}

export default VibloModule;
