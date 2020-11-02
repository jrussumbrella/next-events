import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';
import MobileLinks from './MobileLinks/MobileLinks';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.pageTitle}>
          <Link to="/"> Eventify </Link>
        </div>
        <div className={styles.headerRight}>
          <MobileLinks />
        </div>
      </header>
    </>
  );
};

export default Header;
