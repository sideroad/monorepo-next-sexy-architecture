import React, { FC } from 'react';

interface Props {
  login: string;
  avatar_url: string;
  html_url: string;
}
const User: FC<Props> = (props: Props) => {
  return (
    <>
      <div>
        <div
          className="avator"
          style={{ backgroundImage: `url(${props.avatar_url})` }}
        />
        <p>
          <a href={props.html_url}>{props.login}</a>
        </p>
      </div>
      <style jsx>
        {`
          p,
          div {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
          a {
            height: 2em;
            text-align: center;
            outline: none;
            color: #333;
            text-decoration: none;
            font-size: 1.2em;
          }
          .avator {
            border: none;
            border-radius: 50%;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            width: 100px;
            height: 100px;
            margin: auto;
          }
        `}
      </style>
    </>
  );
};

export default User;
