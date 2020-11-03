import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DesktopLinks.module.css';
import Button from 'components/Button';
import { useUser } from 'contexts';
import Avatar from 'components/Avatar';

const DesktopLinks = () => {
  const { currentUser, loading } = useUser();

  const renderLinks = () => {
    if (loading) {
      return null;
    }

    if (currentUser) {
      return (
        <>
          <li className={styles.navItem}>
            <Link to="/profile" className={styles.navLink}>
              Create a group
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/profile" className={styles.navLink}>
              Create an event
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to={`/profile/${currentUser._id}`} className={styles.navLink}>
              <Avatar letter={currentUser.name.charAt(0)} size={50} />
            </Link>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className={styles.navItem}>
            <Link to="/login" className={styles.navLink}>
              Log In
            </Link>
          </li>
          <li className={styles.navItem}>
            <Button title="Sign Up" href="/signup" />
          </li>
        </>
      );
    }
  };

  return (
    <div className={styles.desktopLinksContainer}>
      <ul className={styles.navList}>{renderLinks()}</ul>
    </div>
  );
};

export default DesktopLinks;
