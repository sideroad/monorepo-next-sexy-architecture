import React, { FC, useState } from 'react';
import I18n from '@sideroad/react-i18n';

interface Props {
  onSubmit: (id: string) => void;
}
const Search: FC<Props> = (props: Props) => {
  const [text, setText] = useState('octocat');

  return (
    <>
      <p>
        <input value={text} onChange={e => setText(e.target.value)} />
      </p>
      <p>
        <button onClick={() => props.onSubmit(text)}>
          <I18n id="submit" />
        </button>
      </p>
      <style jsx>
        {`
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
    </>
  );
};

export default Search;
