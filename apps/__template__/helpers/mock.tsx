import React, { FC } from 'react';
import serialize from 'serialize-javascript';

const isServer = typeof window === 'undefined';
const mocks = {};
let isLoaded = false;
const loadMockData = () => {
  if (!isServer) {
    return window['__MOCKED_FETCHER_DATA__'];
  }
  if (!isLoaded) {
    isLoaded = true;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const klawSync = require('klaw-sync');
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const path = require('path');

    const items = klawSync(path.join(process.cwd(), 'mocks'), {
      filter: item => item.stats.isFile()
    });
    items.forEach(item => {
      const mock = path.basename(item.path, '.json');
      const [resource, action] = mock.split('.');
      if (!mocks[resource]) {
        mocks[resource] = {};
      }
      mocks[resource][action] = require(`../mocks/${mock}.json`);
    });
  }
  return mocks;
};
export default loadMockData;

export const MockedDataRenderJS: FC = () => {
  loadMockData();
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `window.__MOCKED_FETCHER_DATA__=${serialize(mocks)}`
      }}
    />
  );
};
