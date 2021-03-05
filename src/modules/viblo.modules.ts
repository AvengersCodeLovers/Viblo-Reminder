import ApiService from "../services/api";
import TimeHelper from "../utils/datetime.utils";
import { IStatsResponse } from "../interfaces/response/IStatsResponse";

class VibloModule {
  public apiService: ApiService;
  public timeHelper: TimeHelper;

  constructor(public api: ApiService, public time: TimeHelper) {
    this.apiService = api;
    this.timeHelper = time;
  }

  public getOrganizationsStatsFromLastMonth(
    groupSlug: string
  ): IStatsResponse | void {
    console.log("Call getOrganizationsStatsFromLastMonth")
    const time = this.timeHelper.getLastMonth()
    console.log(`Time: ${JSON.stringify(time)}`)
    this.apiService
      .getOrganizationsStats(groupSlug, time.fromLastMonth, time.toLastMonth)
      .then((res) => {
        console.log(`getOrganizationsStatsFromLastMonth: ${JSON.stringify(res.data)}`)
        return res.data
      })
      .catch((err) => {
        console.log(`getOrganizationsStatsFromLastMonth error`)
        throw new Error(err)
      });
  }
}

export default VibloModule;
