import React from 'react';
import { useUser } from '../../../contexts';
import Avatar from '../../../components/Avatar';
import { formatCreatedAt } from '../../../utils/formatDate';
import styles from './ProfileDetails.module.css';

const ProfileDetails = () => {
  const { currentUser } = useUser();

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.top}>
        <Avatar letter={currentUser.name.charAt(0)} size={80} fontSize={3} />
      </div>
      <div className={styles.userDetails}>
        <div className={styles.name}>{currentUser.name}</div>
        <div className={styles.date}>
          Joined Date:
          <span className={styles.createdAt}>
            {formatCreatedAt(currentUser.createdAt)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
