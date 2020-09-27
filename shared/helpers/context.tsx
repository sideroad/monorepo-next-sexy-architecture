import React from 'react';

interface DefaultContext {
  lang: string;
  t: (key: string) => string;
}

const defaultContext: DefaultContext = {
  lang: 'en-us',
  t: (key: string) => key
};
export const Context = React.createContext(defaultContext);

export const { Provider, Consumer } = Context;
