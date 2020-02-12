import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Header from '../components/Header';

const NAV_LIST = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/posts',
    name: 'Posts',
  },
  {
    path: '/about',
    name: 'About',
  },
];

const MainLayout = ({ children }) => (
  <>
    <Head>
      <title>Next Blog</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    </Head>
    <Header title="Next-Blog" navList={NAV_LIST} />
    <div className="contents">{children}</div>

    <style jsx global>{`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      html,
      body {
        margin: 0;
        padding: 0;
      }

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .contents {
        padding: 16px;
      }
    `}</style>
  </>
);

MainLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
};

export default MainLayout;
