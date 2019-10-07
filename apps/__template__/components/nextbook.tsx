/* eslint-disable react/display-name */
import React from 'react';
import Search from './search';
import User from './user';

const nextBook = {
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
          login="sideroad"
          avatar_url="https://avatars2.githubusercontent.com/u/411486?v=4"
          html_url="https://github.com/sideroad"
        />
      )
    }
  ]
};

export default nextBook;
