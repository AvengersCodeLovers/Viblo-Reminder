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
        let prevMonthDays: number = lastMonth.daysInMonth();
        let fromLastMonth: string = lastMonth.format('YYYY-MM-') + '01';
        let toLastMonth: string = lastMonth.format('YYYY-MM-') + prevMonthDays;
        
        return {
            lastMonth: lastMonth.format('YYYY-MM-'),
            fromLastMonth: fromLastMonth,
            toLastMonth: toLastMonth,
        }
    }
}

export default TimeHelper
