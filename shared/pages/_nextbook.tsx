import React, { ReactElement } from 'react';
import hash from 'object-hash';
import Link from 'components/Link';
import { NextPage } from 'next';
import nextBook from 'components/_nextbook';

export interface NextBook {
  title: string;
  books: Array<{
    name: string;
    desc: string;
    component?: ReactElement;
    components?: Array<{
      name: string;
      component: ReactElement;
    }>;
  }>;
}

const books = nextBook.books.map(book => ({
  ...book,
  id: hash(`${nextBook.title}-${book.name}`)
}));

interface Props {
  query: {
    id?: string;
  };
}
const NextBook: NextPage<Props> = (props: Props) => {
  const currentBook =
    books.find(book => book.id === props.query.id) || books[0];
  const components = currentBook
    ? currentBook.components || [{ name: '', component: currentBook.component }]
    : [];
  return (
    <div>
      <h1 className="title">{nextBook.title}</h1>
      <div className="main">
        <div className="left">
          <h2 className="subtitle">Components</h2>
          <ul className="list">
            {books.map(book => (
              <li className="item" key={book.id}>
                <Link path={`/_nextbook`} query={{ id: book.id }}>
                  <a className="link">{book.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="right">
          {currentBook ? (
            <>
              <h1 className="name">{currentBook.name}</h1>
              {currentBook.desc ? (
                <div className="desc">{currentBook.desc}</div>
              ) : null}
              <div className="divider" />
              {components.map(({ name = '', component }, index) => (
                <div key={index}>
                  {name ? (
                    <>
                      <h2 className="subname">{name}</h2>
                      <div className="subdivider" />
                    </>
                  ) : null}
                  <div>{component}</div>
                  <div className="subdivider" />
                  <h3 className="props">Sample props</h3>
                  <ul>
                    {Object.keys(component.props).map((prop, index) => {
                      const value = component.props[prop];
                      return (
                        <li className="prop" key={index}>
                          <strong>{prop}</strong>:{' '}
                          {value.toString ? value.toString() : value}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="divider" />
                </div>
              ))}
            </>
          ) : null}
        </div>
      </div>
      <style jsx>
        {`
          .title {
            border-bottom: 1px solid #bbb;
            margin: 0;
            padding: 0.75em;
            font-size: 24px;
            font-weight: normal;
          }
          .main {
            display: flex;
            flex-direction: row;
            flex-grow: 1;
            height: calc(100vh - 70px);
          }
          .left {
            width: 30%;
            max-width: 200px;
            border-right: 1px solid #bbb;
            padding: 20px;
          }
          .subtitle {
            font-size: 16px;
            font-weight: normal;
            color: #999;
            margin: 0;
            padding: 1em;
          }
          .list {
            list-style-type: none;
            margin: 0;
            padding-left: 20px;
          }
          .item {
            padding: 0.5em;
          }
          .link {
            text-decoration: none;
            color: #333;
          }
          .right {
            width: 90%;
            overflow: scroll;
            padding: 60px;
          }
          .name {
            font-weight: normal;
            margin: 0;
          }
          .subname {
            font-weight: normal;
            margin: 0;
          }
          .desc {
            padding: 20px 0;
          }
          .divider {
            margin: 60px 0;
            border: 0.5px solid #bbb;
          }
          .subdivider {
            margin: 60px 0;
            border: 0;
          }
          .prop {
            padding: 0.5em;
          }

          .props {
            font-size: 20px;
            font-weight: normal;
            margin: 0;
          }
        `}
      </style>
    </div>
  );
};

NextBook.getInitialProps = async ({ query }) => ({ query });

export default NextBook;
