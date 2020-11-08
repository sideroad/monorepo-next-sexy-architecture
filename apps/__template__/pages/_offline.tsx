import React, { FC } from 'react';
import I18n from '@sideroad/react-i18n';
const theme = {
  color: {
    background: '#ffffff',
    message: '#333333',
    button: '#ffffff',
    'button-background': '#333333'
  }
};

const Offline: FC = () => (
  <>
    <div
      style={{
        backgroundColor: theme.color.background
      }}
      className="root"
    >
      <script src="/static/pulltorefresh.min.js" />
      <script src="/static/pulltorefresh-init.js" />
      <div className="container">
        <div className="logo">
          <img alt="floras" className="img" src="/static/images/favicon.png" />
        </div>
        <div className="message" style={{ color: theme.color.message }}>
          <I18n id="network-connection-failed" />
        </div>
        <div className="button">
          <a
            style={{
              backgroundColor: theme.color['button-background'],
              color: theme.color.button
            }}
            className="reload"
            href=""
          >
            <I18n id="reload" />
          </a>
          <div
            style={{ color: theme.color.message }}
            className="pull-to-refresh"
          >
            <I18n id="pulldown-to-refresh" />
          </div>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        .root {
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .img {
          width: 100px;
          height: 100px;
        }

        .container {
          width: 375px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .logo {
          font-size: 3em;
        }

        .message {
          line-height: 3em;
          font-size: 1.5em;
          text-align: center;
        }

        .button {
          height: 3.5em;
          width: 200px;
        }

        .reload {
          width: 100%;
          height: 100%;
          outline: none;
          border: none;
          border-radius: 3px;
          font-size: 1.5em;
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
        }

        .pull-to-refresh {
          display: none;
          text-align: center;
          font-size: 1.25em;
        }

        @media (max-width: 767px) {
          .reload {
            display: none;
          }
          .pull-to-refresh {
            display: block;
          }
        }
      `}
    </style>
  </>
);

export default Offline;
