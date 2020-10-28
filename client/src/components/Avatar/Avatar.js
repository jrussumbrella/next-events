import React from 'react';
import styles from './Avatar.module.css';

const Avatar = ({ letter, imageUrl }) => {
  return (
    <div className={styles.avatarContainer}>
      {imageUrl ? (
        <div
          className={styles.avatarImage}
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
      ) : (
        <div className={styles.avatarTextContainer}>
          <p className={styles.avatarText}>{letter}</p>
        </div>
      )}
    </div>
  );
};

export default Avatar;
