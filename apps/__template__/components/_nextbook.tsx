/* eslint-disable react/display-name */
import React from 'react';
import Search from './Search';
import User from './User';
import { NextBook } from 'pages/[lang]/_nextbook';

const nextBook: NextBook = {
  title: '__template__',
  books: [
    {
      name: 'Search',
      desc: 'Be able to search github user by ID',
      component: <Search onSubmit={() => console.log('submitted')} />
    },
    {
      name: 'User',
      desc: 'Show user profile',
      component: (
        <User
          key="user"
          login="sideroad"
          avatar_url="https://avatars2.githubusercontent.com/u/411486?v=4"
          html_url="https://github.com/sideroad"
        />
      )
    }
  ]
};

export default nextBook;
