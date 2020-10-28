import React from 'react';
import { useQuery } from 'react-query';
import CategoryAPI from '../../../api/CategoryAPI';
import styles from './HomeCategories.module.css';

const HomeCategories = () => {
  const { isLoading, error, data } = useQuery(
    'homeCategories',
    CategoryAPI.getCategories
  );

  const categories = data?.data?.categories;

  if (isLoading) return <p> Loading ... </p>;

  return (
    <>
      <div className={styles.categoryWrapper}>
        <div className={styles.inner}>
          <ul className={styles.categories}>
            {categories.map((category) => (
              <li key={category._id}>
                <div className={styles.inner}>
                  <div className={styles.item}>
                    <a
                      href="#"
                      className={`${styles.categoryLink} ${styles.categoryTitle}`}
                    >
                      {category.name}
                    </a>
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

export default HomeCategories;
