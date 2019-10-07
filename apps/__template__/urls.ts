import { Urls } from '@sideroad/redux-fetch';
import config from './config';

const urls: Urls = {
  user: {
    get: {
      url: `https://${config.api.host}/users/[id]`,
      method: 'GET'
    }
  }
};
export default urls;
