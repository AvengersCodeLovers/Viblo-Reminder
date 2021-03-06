import * as moment from 'moment-timezone';
import { ILastMonthResponse } from '../interfaces/response/ILastMonthResponse';
import { IMonthYearResponse } from '../interfaces/response/IMonthYearResponse';
class TimeHelper {
  moment;

  constructor() {
    this.moment = moment;
    this.moment.tz.setDefault('Asia/Ho_Chi_Minh');
  }

  getLastMonth(): ILastMonthResponse {
    const lastMonth: moment.Moment = this.moment()
      .subtract(1, 'month')
      .startOf('month');
    const prevMonthDays: number = lastMonth.daysInMonth();
    const fromLastMonth: string = lastMonth.format('YYYY-MM-') + '01';
    const toLastMonth: string = lastMonth.format('YYYY-MM-') + prevMonthDays;

    return {
      lastMonth: lastMonth.format('YYYY-MM'),
      fromLastMonth: fromLastMonth,
      toLastMonth: toLastMonth,
    };
  }

  getMonthYear(): IMonthYearResponse {
    const monthYear = this.moment().subtract(1, 'month').format('MM/YYYY');
    const nowYear = this.moment().format('MM/YYYY');

    return {
      monthYear,
      nowYear,
    };
  }

  getMoment(): moment.Moment {
    return this.moment();
  }

  formatYearMonth(date: string): string {
    return this.moment(date).format('YYYY-MM');
  }
}

export default TimeHelper;
