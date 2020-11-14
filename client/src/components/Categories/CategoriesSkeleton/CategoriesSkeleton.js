import React from 'react';
import styles from './CategoriesSkeleton.module.css';

const CategoriesSkeleton = ({ numbers = 6 }) => {
  const lists = Array(numbers)
    .fill(null)
    .map((_, i) => i + 1);

  return (
    <div className={styles.list}>
      {lists.map((list) => (
        <div className={styles.item} key={list}></div>
      ))}
    </div>
  );
};

export default CategoriesSkeleton;
