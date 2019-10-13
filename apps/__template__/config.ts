import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export default {
  theme: {
    color: '#EC6D71'
  },
  meta: {
    title: '__template__',
    description: 'this app is exists to say hello world',
    creator: 'sideroad'
  },
  isMocked: publicRuntimeConfig.isMocked,
  global: {
    url: process.env.GLOBAL_URL
  },
  api: {
    host: 'api.github.com'
  }
};
