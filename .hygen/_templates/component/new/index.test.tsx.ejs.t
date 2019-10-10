---
to: components/__tests__/<%= name %>.test.tsx
---
import React from 'react';
import <%= h.inflection.camelize(name) %> from '../<%= name %>';
import renderer from 'react-test-renderer';

test('<%= h.inflection.camelize(name) %> to render', () => {
  const component = renderer.create(<<%= h.inflection.camelize(name) %> onClick={() => {}} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
