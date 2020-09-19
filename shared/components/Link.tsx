import React, { FC } from 'react';
import NextLink from 'next/link';
import qs from 'qs';

interface Props {
  path: string;
  query?: { [x in string]: any };
  children: React.ReactElement;
}

const normalize = (_uri: string, _params: { [x: string]: string }) => {
  let uri = _uri;
  const params = {};
  Object.keys(_params || {}).forEach(key => {
    if (uri.match(`\\[${key}\\]`)) {
      uri = uri.replace(
        new RegExp(`\\[${key}\\]`, 'g'),
        encodeURIComponent(_params[key])
      );
    } else {
      params[key] = _params[key];
    }
  });
  return { uri, params };
};

const Link: FC<Props> = (props: Props) => {
  const { uri: as, params } = normalize(props.path, props.query);
  const query = qs.stringify(params);

  return (
    <NextLink
      {...props}
      href={`${props.path}${query ? `?${query}` : ''}`}
      as={`${as}${query ? `?${query}` : ''}`}
    >
      {props.children}
    </NextLink>
  );
};

export default Link;
