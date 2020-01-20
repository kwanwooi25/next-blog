import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import MainLayout from '../../layouts/MainLayout';

const Post = ({ post: { title, body } }) => (
  <MainLayout>
    <h2>{title}</h2>
    <p>{body}</p>
  </MainLayout>
);

Post.getInitialProps = async ({ query }) => {
  const { id } = query;
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return { post: res.data };
};

Post.propTypes = {
  post: PropTypes.shape({
    userId: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
  }),
};

export default Post;
