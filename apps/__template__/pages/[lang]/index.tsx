import React, { useContext } from 'react';
import Head from 'components/head';
import Nav from 'components/nav';
import Search from 'components/search';
import Router from 'next/router';
import { NP } from 'types/next';
import { Context } from '@sideroad/react-i18n';

const Index: NP = () => {
  const { lang } = useContext(Context);
  return (
    <div>
      <Head />
      <Nav />
      <Search
        onSubmit={text =>
          Router.push(
            '/[lang]/users/[id]',
            `/${lang}/users/${encodeURIComponent(text)}`
          )
        }
      />
    </div>
  );
};

export default Index;
