import React from 'react';
import { useQuery } from 'react-query';
import CategoryAPI from '../../../api/CategoryAPI';
import styles from './styles.module.css';

const Categories = () => {
  const { isLoading, error, data } = useQuery(
    'homeCategories',
    CategoryAPI.getCategories
  );

  const categories = data?.data?.categories;

  if (isLoading) return <p> Loading ... </p>;

  return (
    <>
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
    </>
  );
};

export default Categories;
