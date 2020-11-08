import React from 'react';
import Head from 'next/head';
import App from 'next/app';
import config from '../config';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ...ctx });
    }
    return {
      pageProps,
      headers: ctx.req ? ctx.req.headers : undefined,
      lang: ctx.query.lang
    };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
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
      </>
    );
  }
}

export default MyApp;
