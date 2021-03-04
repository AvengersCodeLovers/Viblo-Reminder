import * as moment from 'moment-timezone'
import { ILastMonthResponse } from '../interfaces/response/ILastMonthResponse'

class TimeHelper {
    moment;

    constructor() {
        this.moment = moment;
        this.moment.tz.setDefault('Asia/Ho_Chi_Minh')
    }

    getLastMonth(): ILastMonthResponse {
        const lastMonth: moment.Moment = this.moment().subtract(1, 'month').startOf('month');
        const prevMonthDays: number = lastMonth.daysInMonth();
        const fromLastMonth: string = lastMonth.format('YYYY-MM-') + '01';
        const toLastMonth: string = lastMonth.format('YYYY-MM-') + prevMonthDays;
        
        return {
            lastMonth: lastMonth.format('YYYY-MM-'),
            fromLastMonth: fromLastMonth,
            toLastMonth: toLastMonth,
        }
    }
}

export default TimeHelper
