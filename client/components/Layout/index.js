import React from 'react';
import Header from './Header';
import GlobalStyles from './GlobalStyles';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header title="Next Events" />
      <main>{children}</main>
    </>
  );
};

export default Layout;
