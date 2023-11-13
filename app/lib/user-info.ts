import 'server-only';

import os from 'os';

const userInfo = os.userInfo();

export const getUserName = () => {
  return userInfo.username;
};
