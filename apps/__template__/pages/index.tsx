import React from 'react';
import Head from 'components/head';
import Nav from 'components/nav';
import Search from 'components/search';
import Router from 'next/router';
import { NP } from 'types/next';

const Index: NP = () => (
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

export default Index;
