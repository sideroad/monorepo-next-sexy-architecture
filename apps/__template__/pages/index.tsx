import React, { FC } from 'react';
import Head from 'components/Head';
import Nav from 'components/Nav';
import Search from 'components/Search';
import Router from 'next/router';

const Index: FC = () => {
  return (
    <div>
      <Head />
      <Nav />
      <Search
        onSubmit={text =>
          Router.push('/users/[id]', `/users/${encodeURIComponent(text)}`)
        }
      />
    </div>
  );
};

export default Index;
