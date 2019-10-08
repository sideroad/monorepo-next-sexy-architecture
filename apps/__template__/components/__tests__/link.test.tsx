import React from 'react';
import Link from '../link';
import renderer from 'react-test-renderer';
import { Provider, init } from '@sideroad/react-i18n';

test('Link to render', () => {
  window.__SIMPLE_I18N__ = { resource: {}, lang: 'en' };

  const i18n = init({
    assignedLanguage: 'en'
  });
  const component = renderer.create(
    <Provider value={i18n}>
      <Link href="/">
        <a>Hello World</a>
      </Link>
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Link to render with as', () => {
  window.__SIMPLE_I18N__ = { resource: {}, lang: 'en' };

  const i18n = init({
    assignedLanguage: 'en'
  });
  const component = renderer.create(
    <Provider value={i18n}>
      <Link href="/users/[id]" as="/users/sideroad">
        <a>Hello World</a>
      </Link>
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
