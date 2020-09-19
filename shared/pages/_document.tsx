import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import config from '../config';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta charSet="utf-8" />
          <meta name="theme-color" content={config.theme.color} />
          <link rel="icon" href={`/static/images/favicon.png`} />
          <link rel="apple-touch-icon" href={`/static/images/favicon.png`} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
