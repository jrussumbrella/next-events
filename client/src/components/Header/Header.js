import React from 'react';
import { Link } from 'react-router-dom';
import AccountIcon from '../Icons/Account';
import { useUser } from '../../contexts';
import Avatar from '../Avatar';
import styles from './styles.module.css';

const Header = () => {
  const { isAuthenticated, currentUser } = useUser();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.pageTitle}>
          <Link to="/"> Eventify </Link>
        </div>
        <div className={styles.headerRight}>
          <Link to={isAuthenticated ? `/profile/${currentUser._id}` : '/login'}>
            {isAuthenticated ? (
              <Avatar
                letter={currentUser.name.charAt(0)}
                imageUrl={currentUser.imageURL}
              />
            ) : (
              <AccountIcon />
            )}
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
