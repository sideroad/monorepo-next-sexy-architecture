import React, { FC, ReactNode } from 'react';
import { BUTTON } from '../cid';

interface Props {
  onClick: () => void;
  children: ReactNode;
}
const Button: FC<Props> = (props: Props) => {
  return (
    <>
      <button data-cid={BUTTON} onClick={() => props.onClick()}>
        {props.children}
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

export default Button;
