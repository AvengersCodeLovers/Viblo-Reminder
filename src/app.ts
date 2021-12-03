import { IUserPostsResponse } from './interfaces/response/IUserPostsResponse';
import { IStatsResponse } from './interfaces/response/IStatsResponse';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });
import { config } from './config/app.config';
import File from './utils/file';
import ApiService from './services/api';
import TimeHelper from './utils/datetime.utils';
import VibloModule from './modules/viblo.modules';
import * as cron from 'node-cron';
import './utils/logger';
import ChatWork from './utils/chatwork';
import { calculate } from './utils/calculator';

const viblo = new VibloModule(
  new ApiService(),
  new TimeHelper(),
  new File(),
  new ChatWork()
);

console.clear();
console.log('APP RUNNING...');
console.log('APP ENV: ', config);

const time = new TimeHelper();
const api = new ApiService();
const lastMonth = time.getLastMonth();
api.getPostsByUser('hieudt-2054', {
  from: '2021-08-01',
  to: '2021-08-31'
})
.then((response: IUserPostsResponse) => {
  calculate(response.data.data[0]);
})


cron.schedule(config.CRONJOB_FETCH_POST, () => {
  console.log('=======JOB FETCH POST RUNNING========');
  viblo.fetchPost(config.GROUP_SLUG);
});

cron.schedule(config.CRONJOB_NOTIFY, () => {
  console.log('=======JOB NOTIFY RUNNING========');
  viblo.notify(config.GROUP_SLUG);
});
