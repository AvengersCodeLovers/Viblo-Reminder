import cron = require('node-cron');
import ApiService from './services/api'
import TimeHelper from './utils/datetime.utils'
import VibloModule from './modules/viblo.modules'

require('dotenv').config({ path: '.env' })

let viblo = new VibloModule(new ApiService, new TimeHelper)

let response = viblo.getOrganizationsStatsFromLastMonth('avengers-group')

cron.schedule('* * * * *', () => {
})