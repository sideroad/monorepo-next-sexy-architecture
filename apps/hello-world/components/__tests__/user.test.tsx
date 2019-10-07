import React from 'react';
import User from '../user';
import renderer from 'react-test-renderer';

test('User to render submit form', () => {
  const component = renderer.create(
    <User
      login="sideroad"
      avatar_url="https://avatars2.githubusercontent.com/u/411486?v=4"
      html_url="https://github.com/sideroad"
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
