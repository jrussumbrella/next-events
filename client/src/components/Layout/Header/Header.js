import React from 'react';
import { Link } from 'react-router-dom';
import MobileLinks from './MobileLinks';
import DesktopLinks from './DesktopLinks';
import styles from './styles.module.css';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.pageTitle}>
          <Link to="/"> Eventify </Link>
        </div>
        <div className={styles.headerRight}>
          <MobileLinks />
          <DesktopLinks />
        </div>
      </header>
    </>
  );
};

export default Header;
