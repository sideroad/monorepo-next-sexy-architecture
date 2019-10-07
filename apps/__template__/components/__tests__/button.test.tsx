import React from 'react';
import Button from '../button';
import renderer from 'react-test-renderer';

test('Button to render document.head', () => {
  const component = renderer.create(
    <Button onClick={() => {}}>Hello World</Button>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
