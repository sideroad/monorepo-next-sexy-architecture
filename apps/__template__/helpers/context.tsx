import React from 'react';
import Fetcher from '@sideroad/redux-fetch';

interface DefaultContext {
  fetcher?: Fetcher;
  lang: string;
  t: (key: string) => string;
}

const defaultContext: DefaultContext = {
  fetcher: undefined,
  lang: 'en-us',
  t: (key: string) => key
};
export const Context = React.createContext(defaultContext);

export const { Provider, Consumer } = Context;
