import React, { FC } from 'react';
import NextLink, { LinkProps } from 'next/link';
import { useContext } from 'react';
import { Context } from '@sideroad/react-i18n';

const Link: FC<LinkProps> = (props: LinkProps) => {
  const { lang } = useContext(Context);
  const href = props.href === '/' ? '' : props.href;
  return (
    <NextLink
      {...props}
      href={`/[lang]${href}`}
      as={props.as ? `/${lang}${props.as}` : `/${lang}${href}`}
    />
  );
};

export default Link;
