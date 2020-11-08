import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { init, I18nRenderJS } from '@sideroad/react-i18n';
import locales from '../locales';
import config from '../config';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, headers: ctx.req.headers };
  }

  render() {
    const { locale } = this.props;
    const i18n = init({ locales, lang: locale });

    return (
      <Html>
        <Head>
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta charSet="utf-8" />
          <meta name="theme-color" content={config.theme.color} />
          <meta property="og:locale" content={i18n.lang} />
          <link rel="manifest" href="/static/manifest.json" />
          <link rel="icon" href={`/static/images/favicon.png`} />
          <link rel="apple-touch-icon" href={`/static/images/favicon.png`} />
        </Head>
        <body>
          <I18nRenderJS locales={locales} lang={locale} />
          <Main />
          <NextScript />
          <script src="/sw-register.js"></script>
        </body>
      </Html>
    );
  }
}
