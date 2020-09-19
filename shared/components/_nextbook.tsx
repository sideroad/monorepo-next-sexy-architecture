/* eslint-disable react/display-name */
import React from 'react';
import Button from './Button';
import Link from './Link';
import { NextBook } from '../pages/_nextbook';

const nextBook: NextBook = {
  title: 'Shared Components',
  books: [
    {
      name: 'Button',
      desc: 'AWESOME Button',
      component: <Button>FooBar</Button>
    },
    {
      name: 'Link',
      desc: 'Show link with language assignment',
      components: [
        {
          name: 'Basic usage',
          component: (
            <Link path="/">
              <a>Home</a>
            </Link>
          )
        },
        {
          name: 'With as property',
          component: (
            <Link path="/users/[id]" query={{ id: 'sideroad' }}>
              <a>sideroad</a>
            </Link>
          )
        }
      ]
    }
  ]
};

export default nextBook;
