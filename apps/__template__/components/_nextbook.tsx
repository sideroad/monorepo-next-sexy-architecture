/* eslint-disable react/display-name */
import React from 'react';
import Search from './search';
import User from './user';
import Link from './link';
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
    },
    {
      name: 'Link',
      desc: 'Show link with language assignment',
      components: [
        {
          name: 'Basic usage',
          component: (
            <Link key="top" href="/">
              Home
            </Link>
          )
        },
        {
          name: 'With as property',
          component: (
            <Link key="user" href="/users/[id]" as="/users/sideroad">
              sideroad
            </Link>
          )
        }
      ]
    }
  ]
};

export default nextBook;
