import React, { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { HamburgerIcon } from '../Shared/Icons';
import Sidebar from './Sidebar';

const Header = ({ title }) => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  return (
    <>
      <header className="header">
        <div className="page-title">
          <Link href="/">
            <a>{title}</a>
          </Link>
        </div>
        <div className="header-right">
          <div className="hamburger-menu">
            <HamburgerIcon
              active={isOpenDrawer}
              onClick={() => setIsOpenDrawer(!isOpenDrawer)}
            />
          </div>
        </div>
        <Sidebar open={isOpenDrawer} />
      </header>
      <style jsx>{`
        .header {
          height: 8rem;
          background-color: #fff;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 11;
        }

        .page-title {
          font-size: 2rem;
          font-weight: 600;
        }

        .page-title a {
          color: var(--color-primary);
        }

        .hamburger-menu {
          position: fixed;
          z-index: 11;
          top: 2rem;
          right: 2rem;
        }
      `}</style>
    </>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
