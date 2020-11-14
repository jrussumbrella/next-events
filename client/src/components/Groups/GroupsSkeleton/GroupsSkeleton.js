import React from 'react';
import styles from './GroupsSkeleton.module.css';

const GroupsSkeleton = ({ numbers = 6 }) => {
  const lists = Array(numbers)
    .fill(null)
    .map((_, i) => i + 1);

  return (
    <div className={styles.grid}>
      {lists.map((list) => (
        <div className={styles.item} key={list}></div>
      ))}
    </div>
  );
};

export default GroupsSkeleton;
