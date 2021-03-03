import ApiService from '../services/api'
import TimeHelper from '../utils/datetime.utils'
import { IStatsResponse } from '../interfaces/response/IStatsResponse'

class VibloModule {
    public apiService: ApiService;
    public timeHelper: TimeHelper;

    constructor(private api: ApiService, private time: TimeHelper) {
        this.apiService = api
        this.timeHelper = time
    }

    getOrganizationsStatsFromLastMonth (groupSlug: string): IStatsResponse {
        let time = this.timeHelper.getLastMonth()

        return this.apiService.getOrganizationsStats(
            groupSlug,
            time.fromLastMonth,
            time.toLastMonth
        )
    }
}

export default VibloModule