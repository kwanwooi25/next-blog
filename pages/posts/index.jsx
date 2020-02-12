import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import MainLayout from '../../layouts/MainLayout';
import Router from 'next/router';
import Head from 'next/head';

const Posts = ({ posts = [] }) => {
  const handleClickPost = postId => e => {
    e.preventDefault();
    e.stopPropagation();
    Router.push(`/posts/${postId}`);
  };

  return (
    <>
      <MainLayout>
        <Head>
          <title>Posts | Next Blog</title>
        </Head>

        <h2>Posts</h2>

        <ul>
          {posts.map(({ id, title, body }) => (
            <li key={id} className="post" onClick={handleClickPost(id)}>
              <h3>{title}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ul>
      </MainLayout>

      <style jsx>{`
        .post {
          border: 1px solid #181818;
          border-radius: 8px;
          cursor: pointer;
          padding: 16px;
        }

        .post:hover {
          background: #181818;
          color: #fff;
        }

        .post + .post {
          margin-top: 16px;
        }

        .post h3 {
          margin: 0;
        }

        .post p {
          margin: 8px 0 0;
        }
      `}</style>
    </>
  );
};

Posts.getInitialProps = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return { posts: res.data || [] };
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.number,
      id: PropTypes.number,
      title: PropTypes.string,
      body: PropTypes.string,
    })
  ),
};

export default Posts;
