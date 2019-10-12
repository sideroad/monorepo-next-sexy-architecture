import React, { FC } from 'react';
import NextHead from 'next/head';
import config from '../config';

interface Props {
  title?: string;
  description?: string;
  url?: string;
}

const Head: FC<Props> = (props: Props) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || config.meta.title}</title>
    <meta
      name="description"
      content={props.description || config.meta.description}
    />
    <meta property="og:title" content={config.meta.title} />
    <meta property="og:description" content={config.meta.description} />
    <meta property="og:card" content="summary" />
    <meta property="og:creator" content={config.meta.creator} />
    <meta property="og:site_name" content={props.title || config.meta.title} />
    <meta property="og:url" content={props.url || config.global.url} />
    <meta property="og:title" content={props.title || config.meta.title} />
    <meta property="og:image" content="/static/images/favicon.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:site" content={props.url || config.global.url} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="/static/images/favicon.png" />
  </NextHead>
);

export default Head;
