import React from 'react';
import Header from './Header';
import styles from './styles.module.css';

const Layout = ({ children }) => (
  <>
    <Header />
    <main className={styles.main}>{children}</main>
  </>
);

export default Layout;
