import React from 'react';
import styles from './Spinner.module.css';

const Spinner = ({ color, size = 30 }) => {
  const sizeStyle = `${size}px`;

  return (
    <>
      <div
        className={styles.loader}
        style={{ width: sizeStyle, height: sizeStyle }}
      />
    </>
  );
};

export default Spinner;
