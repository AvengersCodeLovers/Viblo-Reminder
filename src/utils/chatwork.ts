import * as CW from 'avengers-chatwork';
import { config } from '../config/app.config';

class ChatWork {
  private client;

  constructor() {
    this.client = CW();
    this.client.init({
      token: config.CHATWORK_API,
    });
  }

  public send(template: string): void {
    this.client.post(
      `rooms/${config.ROOM_ID}/messages`,
      {
        body: template,
      },
      function (err, res) {
        console.log(res.body);
      }
    );
  }
}

export default ChatWork;
