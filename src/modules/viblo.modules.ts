import ApiService from '../services/api'
import TimeHelper from '../utils/datetime.utils'
import { IStatsResponse } from '../interfaces/response/IStatsResponse'

class VibloModule {
    public apiService: ApiService;
    public timeHelper: TimeHelper;

    constructor(public api: ApiService, public time: TimeHelper) {
        this.apiService = api
        this.timeHelper = time
    }

    public getOrganizationsStatsFromLastMonth (groupSlug: string): IStatsResponse | void {
        const time = this.timeHelper.getLastMonth()

        this.apiService.getOrganizationsStats(
            groupSlug,
            time.fromLastMonth,
            time.toLastMonth
        ).then((res) => {
            return res.data
        }).catch((err) => {
            throw new Error(err)
        })
    }
}

export default VibloModule