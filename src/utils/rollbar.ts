import Rollbar = require('rollbar');
import { config } from '../config/app.config';
class RollBar {
  public rollbarInstance: Rollbar;

  constructor() {
    this.rollbarInstance = new Rollbar({
      accessToken: config.ROLL_BAR_TOKEN,
      captureUncaught: true,
      captureUnhandledRejections: true
    });
  }

  create(): Rollbar {
    return this.rollbarInstance;
  }

  log(...args: Rollbar.LogArgument[]) {
    return this.rollbarInstance.log(...args);
  }
}

export default RollBar;
