/* eslint-disable react/display-name */
import React from 'react';
import Button from './Button';
import { NextBook } from '../pages/_nextbook';

const nextBook: NextBook = {
  title: 'Shared Components',
  books: [
    {
      name: 'Button',
      desc: 'AWESOME Button',
      component: <Button>FooBar</Button>
    }
  ]
};

export default nextBook;
