import cron = require('node-cron')
require('dotenv').config({ path: '.env' })

cron.schedule('* * * * *', () => {
    console.log('Inital Job');
})