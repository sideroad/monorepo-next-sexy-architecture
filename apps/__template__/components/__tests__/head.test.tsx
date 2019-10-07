import React from 'react';
import Head from '../head';
import renderer from 'react-test-renderer';

test('Head to render document.head', () => {
  const component = renderer.create(<Head />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
