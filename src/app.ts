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

const viblo = new VibloModule(
  new ApiService(),
  new TimeHelper(),
  new File(),
  new ChatWork()
);

console.log('APP RUNNING...');
console.log('APP CRONJOB FETCH POST: ', config.CRONJOB_FETCH_POST);
console.log('APP CRONJOB NOTIFY: ', config.CRONJOB_NOTIFY);

cron.schedule(config.CRONJOB_FETCH_POST, () => {
  console.log('=======JOB FETCH POST RUNNING========');
  viblo.fetchPost(config.GROUP_SLUG);
});

cron.schedule(config.CRONJOB_NOTIFY, () => {
  console.log('=======JOB NOTIFY RUNNING========');
  viblo.notify(config.GROUP_SLUG);
});
