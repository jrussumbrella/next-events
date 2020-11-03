import React from 'react';
import Avatar from '../../../components/Avatar';
import { formatCreatedAt } from '../../../utils/formatDate';
import styles from './ProfileDetails.module.css';

const ProfileDetails = ({ user }) => {
  return (
    <div className={styles.detailsContainer}>
      <div className={styles.top}>
        <Avatar letter={user.name.charAt(0)} size={80} fontSize={3} />
      </div>
      <div className={styles.userDetails}>
        <div className={styles.name}>{user.name}</div>
        <div className={styles.date}>
          Eventify Member Date:
          <span className={styles.createdAt}>
            {formatCreatedAt(user.createdAt)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
