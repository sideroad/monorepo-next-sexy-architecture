import React, { FC } from 'react';
import Link from 'next/link';

const links = [{ pathname: `/users/octocat`, label: 'Octocat' }];

const Nav: FC = () => (
  <>
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <ul>
          {links.map(({ pathname, label }) => (
            <li key={`nav-link-${pathname}-${label}`}>
              <Link href={pathname}>
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
