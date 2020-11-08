import React from 'react';
import Head from 'next/head';
import App from 'next/app';
import { init, Provider as I18nProvider } from '@sideroad/react-i18n';
import { Provider as ContextProvider } from 'shared/helpers/context';
import locales from '../locales';
import config from '../config';

interface Props {
  headers: {
    [x in string]: string;
  };
}

class MyApp extends App<Props> {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    const headers = ctx.req
      ? {
          'user-agent': ctx.req.headers['user-agent'],
          cookie: ctx.req.headers.cookie
        }
      : {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ...ctx });
    }
    return {
      pageProps,
      headers
    };
  }

  render() {
    const { Component, pageProps, router } = this.props;

    const i18n = init({
      lang: router.locale,
      locales
    });

    return (
      <I18nProvider value={i18n}>
        <ContextProvider
          value={{
            ...i18n
          }}
        >
          <Head>
            <title>{config.meta.title}</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
            />
          </Head>
          <Component {...pageProps} />
          <style jsx global>
            {`
              body,
              button,
              input {
                margin: 0;
                font-family: -apple-system, Avenir Next, Avenir, Helvetica,
                  sans-serif;
              }
            `}
          </style>
        </ContextProvider>
      </I18nProvider>
    );
  }
}

export default MyApp;
