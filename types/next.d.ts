import { NextPage, NextPageContext } from 'next';
import Fetcher from '@sideroad/redux-fetch';

export interface NPC extends NextPageContext {
  fetcher: Fetcher;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface NP<P = {}, IP = P> extends NextPage {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getInitialProps?(ctx: NPC): Promise<any>;
}
