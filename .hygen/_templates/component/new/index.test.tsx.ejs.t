---
to: components/__tests__/<%= h.inflection.camelize(name) %>.test.tsx
---
import React from 'react';
import <%= h.inflection.camelize(name) %> from '../<%= h.inflection.camelize(name) %>';
import renderer from 'react-test-renderer';

test('<%= h.inflection.camelize(name) %> to render', () => {
  const component = renderer.create(<<%= h.inflection.camelize(name) %> onClick={() => {}} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
