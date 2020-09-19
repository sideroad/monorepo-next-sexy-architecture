---
to: components/<%= h.inflection.camelize(name) %>.tsx
---
import React, { FC } from 'react';
import I18n from '@sideroad/react-i18n';

interface Props {
  onClick?: () => void;
}
const <%= h.inflection.camelize(name) %>: FC<Props> = (props: Props) => {
  return (
    <>
      <button onClick={props.onClick}>
        <I18n id="hello" />
      </button>
      <style jsx>
        {`
          button {
            border-radius: 3px;
            background-color: #333;
            color: #fffffc;
            border: none;
            outline: none;
            padding: 0.5em;
            font-size: 1.25em;
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
};

export default <%= h.inflection.camelize(name) %>;
