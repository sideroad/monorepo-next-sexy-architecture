import React from 'react';
import NextBook from '../_nextbook';
import renderer from 'react-test-renderer';

test('Button to render document.head', () => {
  const component = renderer.create(
    <>
      {NextBook.books.map(book => (
        <div key={book.name}>
          {book.name}
          {book.component ? book.component : null}
          {book.components
            ? book.components.map(item => (
                <div key={`${book.name}-${item.name}`}>
                  <div>
                    {book.name} - {item.name}
                  </div>
                  <div>{item.component}</div>
                </div>
              ))
            : null}
        </div>
      ))}
    </>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
