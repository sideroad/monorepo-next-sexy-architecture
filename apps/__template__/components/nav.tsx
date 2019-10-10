import React, { FC } from 'react';
import Link from 'components/link';
import { NAV } from '../cid';

const links = [{ href: '/users/octocat', label: 'Octocat' }];

const Nav: FC = () => (
  <nav data-cid={NAV}>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <ul>
        {links.map(({ href, label }) => (
          <li key={`nav-link-${href}-${label}`}>
            <Link href="/users/[id]" as={href}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </ul>

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
  </nav>
);

export default Nav;
