import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Search from './search';

const components = storiesOf('hello-world', module);
components
  .addDecorator(withKnobs)
  .addDecorator(withInfo())
  .add('Search', () => <Search onSubmit={action('submitted')} />);
