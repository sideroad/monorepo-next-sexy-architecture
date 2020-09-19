import React, { useContext, FC } from 'react';
import Head from 'components/Head';
import Nav from 'components/Nav';
import Search from 'components/Search';
import Router from 'next/router';
import { Context } from 'helpers/context';

const Index: FC = () => {
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
