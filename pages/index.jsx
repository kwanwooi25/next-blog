import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Head from 'next/head';

const Index = () => (
  <MainLayout>
    <Head>
      <title>Home | Next Blog</title>
    </Head>
    <h2>Welcome to Next-Blog</h2>
  </MainLayout>
);

export default Index;
