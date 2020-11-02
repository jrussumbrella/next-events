import React from 'react';
import styles from './Avatar.module.css';

const Avatar = ({ letter, imageUrl, size = 40, fontSize = 1.6 }) => {
  const sizeStyle = `${size}px`;

  const fontSizeStyle = `${fontSize}rem`;

  return (
    <div
      className={styles.avatarContainer}
      style={{ width: sizeStyle, height: sizeStyle }}
    >
      {imageUrl ? (
        <div
          className={styles.avatarImage}
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
      ) : (
        <div className={styles.avatarTextContainer}>
          <p className={styles.avatarText} style={{ fontSize: fontSizeStyle }}>
            {letter}
          </p>
        </div>
      )}
    </div>
  );
};

export default Avatar;
