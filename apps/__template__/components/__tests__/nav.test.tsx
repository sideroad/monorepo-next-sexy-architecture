import React from 'react';
import Nav from '../nav';
import renderer from 'react-test-renderer';

test('Nav to render navigation', () => {
  const component = renderer.create(<Nav />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
