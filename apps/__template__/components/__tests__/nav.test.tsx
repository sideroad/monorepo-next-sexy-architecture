import React from 'react';
import Nav from '../nav';
import renderer from 'react-test-renderer';
import { init, Provider } from '@sideroad/react-i18n';

test('Nav to render navigation', () => {
  window.__SIMPLE_I18N__ = { resource: {}, lang: 'en' };

  const i18n = init({
    assignedLanguage: 'en'
  });
  const component = renderer.create(
    <Provider value={i18n}>
      <Nav />
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
