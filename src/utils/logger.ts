import TimeHelper from './datetime.utils';

const time = new TimeHelper();
const log = console.log;

console.log = function (...args) {
  function formatConsoleDate() {
    return `${time.getMoment().format('DD/MM/YYYY HH:mm:ss')} `;
  }

  log.apply(console, [formatConsoleDate()].concat(args));
};
