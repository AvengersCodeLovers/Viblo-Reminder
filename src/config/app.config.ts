export const config = {
  CHATWORK_API: process.env.CHATWORK_API || null,
  ROOM_ID: process.env.ROOM_ID || null,
  VIBLO_TOKEN: process.env.VIBLO_TOKEN || null,
  GROUP_SLUG: process.env.GROUP_SLUG || null,
  CRONJOB_FETCH_POST: process.env.CRONJOB_FETCH_POST || '0 7 1 * *',
  CRONJOB_NOTIFY: process.env.CRONJOB_NOTIFY || '0 14 1 * *',
  ROLL_BAR_TOKEN: process.env.ROLL_BAR_TOKEN || null,
};
