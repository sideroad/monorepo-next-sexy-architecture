import React, { FC } from 'react';
import Link from 'shared/components/Link';

const links = [
  { path: '/users/[id]', query: { id: 'octocat' }, label: 'Octocat' }
];

const Nav: FC = () => (
  <>
    <nav>
      <ul>
        <li>
          <Link path="/">
            <a>Home</a>
          </Link>
        </li>
        <ul>
          {links.map(({ path, query, label }) => (
            <li key={`nav-link-${path}-${label}`}>
              <Link path={path} query={query}>
                <a>{label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </ul>
    </nav>

    <style jsx>{`
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #333;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </>
);

export default Nav;
