---
to: components/__tests__/<%= name %>.test.tsx
---
import React from 'react';
import <%= Name %> from '../<%= name %>';
import renderer from 'react-test-renderer';

test('<%= Name %> to render', () => {
  const component = renderer.create(<<%= Name %> onClick={() => {}} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
