import { Urls } from '@sideroad/redux-fetch';

const urls: Urls = {
  user: {
    get: {
      url: 'https://api.github.com/users/[id]',
      method: 'GET'
    }
  }
};
export default urls;
