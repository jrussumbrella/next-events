import React from 'react';
import Header from './Header';
import GlobalStyles from './GlobalStyles';
import Head from 'next/head';

const Layout = ({ children, title = 'Next Events' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <GlobalStyles />
      <Header title="Next Events" />
      <main className="main">{children}</main>
      <style jsx>{`
        .main {
          margin-top: 8rem;
        }
      `}</style>
    </>
  );
};

export default Layout;
