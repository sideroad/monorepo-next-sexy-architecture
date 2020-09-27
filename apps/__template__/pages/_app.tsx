import React from 'react';
import Head from 'next/head';
import App from 'next/app';
import { init, Provider as I18nProvider, Headers } from '@sideroad/react-i18n';
import { Provider as ContextProvider } from 'shared/helpers/context';
import locales, { fallbackLanguage } from '../locales';
import config from '../config';

interface Props {
  headers: Headers;
  lang: string | undefined;
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
      headers,
      lang: ctx.query.lang
    };
  }

  render() {
    const { Component, pageProps, headers, lang } = this.props;

    const i18n = init({
      headers,
      locales,
      fallbackLanguage,
      assignedLanguage: lang
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
