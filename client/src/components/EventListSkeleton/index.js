import React from 'react';
import styles from './styles.module.css';

const EventListSkeleton = ({ numbers = 5 }) => {
  const lists = Array(numbers)
    .fill(null)
    .map((_, i) => i + 1);

  return (
    <>
      <ul className={styles.list}>
        {lists.map((list) => (
          <li key={list}>
            <div className={styles.box} />
            <div className={styles.lineContainer}>
              <div className={styles.line} />
              <div className={styles.line} style={{ width: '50%' }} />
              <div className={styles.line} style={{ width: '30%' }} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventListSkeleton;
