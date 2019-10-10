import React, { FC, useState, useContext } from 'react';
import I18n, { Context } from '@sideroad/react-i18n';
import Button from './button';
import { SEARCH } from '../cid';

interface Props {
  onSubmit: (id: string) => void;
}
const Search: FC<Props> = (props: Props) => {
  const [text, setText] = useState('octocat');
  const i18n = useContext(Context);

  return (
    <form
      data-cid={SEARCH}
      onSubmit={e => {
        e.preventDefault();
        props.onSubmit(text);
      }}
    >
      <div className="title">
        {
          // I18n provide two alternatives
          // here is a one to provide component ( recommended )
        }
        <h1>
          <I18n id="hello" />
        </h1>
        <h2>
          {
            // second one to provide functionality
          }
          {i18n.t('search-description')}
        </h2>
      </div>
      <p>
        <input value={text} onChange={e => setText(e.target.value)} />
      </p>
      <p>
        <Button onClick={() => props.onSubmit(text)}>
          <I18n id="submit" />
        </Button>
      </p>
      <style jsx>
        {`
          .title {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
          input {
            border: 1px solid #333;
            border-radius: 3px;
            font-size: 1.25em;
            height: 2em;
            text-align: center;
            outline: none;
          }
          p {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          button {
            border-radius: 3px;
            background-color: #333;
            color: #fffffc;
            border: none;
            outline: none;
            padding: 0.5em;
            font-size: 1.25em;
          }
        `}
      </style>
    </form>
  );
};

export default Search;
