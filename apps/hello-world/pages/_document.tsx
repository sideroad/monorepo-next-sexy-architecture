import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { init, I18nRenderJS, Headers } from '@sideroad/react-i18n';
import locales from '../locales';
import config from '../config';

interface Props {
  headers: Headers;
}

export default class MyDocument extends Document<Props> {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, headers: ctx.req.headers };
  }

  render() {
    const { headers } = this.props;

    const i18n = init({ headers, locales });

    return (
      <html lang={i18n.lang}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="description" content={config.meta.description} />
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#EC6D71" />
          <meta property="og:site_name" content="floras" />
          <meta property="og:image" content={`/static/images/favicon.png`} />
          <meta property="og:locale" content={i18n.lang} />
          <meta property="og:title" content={config.meta.title} />
          <meta property="og:description" content={config.meta.description} />
          <meta property="og:card" content="summary" />
          <meta property="og:creator" content={config.meta.creator} />
          <meta property="og:image:width" content="300" />
          <meta property="og:image:height" content="300" />
          <link rel="manifest" href="/static/manifest.json" />
          <link rel="icon" href={`/static/images/favicon.png`} />
          <link rel="apple-touch-icon" href={`/static/images/favicon.png`} />
        </Head>
        <body>
          <I18nRenderJS headers={headers} locales={locales} />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
