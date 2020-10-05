import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HamburgerIcon from '../../Icons/HamburgerIcon';
import Sidebar from '../Sidebar';
import styles from './styles.module.css';

const Header = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const sidebarRef = useRef();
  const mobileMenuRef = useRef();

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  function handleClickOutside(e) {
    if (
      sidebarRef.current.contains(e.target) ||
      mobileMenuRef.current.contains(e.target)
    ) {
      return;
    }
    setIsOpenDrawer(false);
  }

  function handleClickSidebar() {
    setIsOpenDrawer(!isOpenDrawer);
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.pageTitle}>
          <Link to="/"> Eventify </Link>
        </div>
        <div className={styles.headerRight}>
          <div
            className={styles.hamburgerMenu}
            ref={mobileMenuRef}
            onClick={handleClickSidebar}
          >
            <HamburgerIcon active={isOpenDrawer} />
          </div>
        </div>
        <Sidebar
          open={isOpenDrawer}
          ref={sidebarRef}
          handleClick={handleClickSidebar}
        />
      </header>
    </>
  );
};

export default Header;
