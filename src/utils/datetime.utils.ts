import * as moment from 'moment-timezone'
import { ILastMonthResponse } from '../interfaces/response/ILastMonthResponse'

class TimeHelper {
    moment;

    constructor() {
        this.moment = moment;
        this.moment.tz.setDefault('Asia/Ho_Chi_Minh')
    }

    getLastMonth(): ILastMonthResponse {
        let lastMonth: moment.Moment = this.moment().subtract(1, 'month').startOf('month');
        var prevMonthDays: Number = lastMonth.daysInMonth();
        let fromLastMonth: String = lastMonth.format('YYYY-MM-') + '01';
        let toLastMonth: String = lastMonth.format('YYYY-MM-') + prevMonthDays;
        
        return {
            fromLastMonth: fromLastMonth,
            toLastMonth: toLastMonth,
        }
    }
}

export default TimeHelper
