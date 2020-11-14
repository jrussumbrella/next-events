import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Categories.module.css';

const Categories = ({ categories }) => {
  return (
    <>
      <div className={styles.categoryWrapper}>
        <div className={styles.inner}>
          <ul className={styles.categories}>
            {categories.map((category) => (
              <li key={category._id}>
                <div className={styles.inner}>
                  <div className={styles.item}>
                    <Link
                      to={`/events?category=${category.name}`}
                      className={`${styles.categoryLink} ${styles.categoryTitle}`}
                    >
                      {category.name}
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Categories;
