import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { init, I18nRenderJS, Headers } from '@sideroad/react-i18n';
import locales from '../locales';
import config from '../config';
import { assignUrl } from '../locales';

interface Props {
  headers: Headers;
  lang: string | undefined;
}

export default class MyDocument extends Document<Props> {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    assignUrl({
      req: ctx.req,
      res: ctx.res,
      query: ctx.query
    });
    return { ...initialProps, headers: ctx.req.headers, lang: ctx.query.lang };
  }

  render() {
    const { headers, lang } = this.props;
    const i18n = init({ headers, locales, assignedLanguage: lang });

    return (
      <html lang={i18n.lang}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta charSet="utf-8" />
          <meta name="theme-color" content={config.theme.color} />
          <meta property="og:locale" content={i18n.lang} />
          <link rel="manifest" href="/static/manifest.json" />
          <link rel="icon" href={`/static/images/favicon.png`} />
          <link rel="apple-touch-icon" href={`/static/images/favicon.png`} />
        </Head>
        <body>
          <I18nRenderJS
            headers={headers}
            locales={locales}
            assignedLanguage={lang}
          />
          <Main />
          <NextScript />
          <script src="/static/sw-register.js"></script>
        </body>
      </html>
    );
  }
}
