import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Header = ({ title, navList }) => (
  <>
    <header>
      <h1>{title}</h1>

      <ul className="nav">
        {navList.map(({ path, name }) => (
          <li key={path}>
            <Link href={path}>
              <a>{name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </header>

    <style jsx>{`
      header {
        display: flex;
        align-items: stretch;
        justify-content: space-between;

        padding: 0 16px;

        background: #181818;
        color: #fff;
      }

      h1 {
        margin: 0;
        padding: 8px;
      }

      .nav {
        display: flex;
        align-items: stretch;
      }

      .nav li + li {
        margin-left: 8px;
      }

      .nav li:hover {
        background: #fff;
        color: #181818;
      }

      .nav li:hover a {
        color: #181818;
      }

      .nav li a {
        display: flex;
        align-items: center;

        color: #fff;
        text-decoration: none;
        height: 100%;
        padding: 0 16px;
      }
    `}</style>
  </>
);

Header.propTypes = {
  title: PropTypes.string,
  navList: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

export default Header;
