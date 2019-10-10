import React, { FC } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { useContext } from 'react';
import { Context } from '@sideroad/react-i18n';
import { LINK } from '../cid';

interface LinkProps extends NextLinkProps {
  children: React.ReactElement;
}

const Link: FC<LinkProps> = (props: LinkProps) => {
  const { lang } = useContext(Context);
  const href = props.href === '/' ? '' : props.href;
  const cidChildren = React.cloneElement(props.children, { 'data-cid': LINK });
  return (
    <NextLink
      {...props}
      href={`/[lang]${href}`}
      as={props.as ? `/${lang}${props.as}` : `/${lang}${href}`}
    >
      {cidChildren}
    </NextLink>
  );
};

export default Link;
