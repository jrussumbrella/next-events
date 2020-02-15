import React from 'react';
import Header from './Header';
import GlobalStyles from './GlobalStyles';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header title="Next Events" />
      <main className="main">{children}</main>
      <style jsx>{`
        .main {
          margin-top: 7rem;
        }
      `}</style>
    </>
  );
};

export default Layout;
