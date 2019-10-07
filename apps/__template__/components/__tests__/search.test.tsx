import React from 'react';
import Search from '../search';
import renderer from 'react-test-renderer';

test('Search to render submit form', () => {
  const component = renderer.create(<Search onSubmit={() => {}} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
