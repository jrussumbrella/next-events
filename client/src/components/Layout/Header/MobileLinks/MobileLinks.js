import React from 'react';
import { Link } from 'react-router-dom';
import AccountIcon from '../../../Icons/Account';
import { useUser } from '../../../../contexts';
import Avatar from '../../../Avatar';
import styles from './MobileLinks.module.css';

const MobileLinks = () => {
  const { isAuthenticated, currentUser, loading } = useUser();

  return (
    <div className={styles.mobileLinksContainer}>
      {!loading && (
        <Link to={isAuthenticated ? `/profile/${currentUser._id}` : '/login'}>
          {isAuthenticated ? (
            <Avatar
              letter={currentUser.name.charAt(0)}
              imageUrl={currentUser.imageURL}
            />
          ) : (
            <AccountIcon size={30} />
          )}
        </Link>
      )}
    </div>
  );
};

export default MobileLinks;
