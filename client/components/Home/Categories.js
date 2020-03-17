import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../store/categories/categoriesAction';
import CategoryLoader from '../Shared/Loader/CategoryLoader';

const Categories = () => {
  const dispatch = useDispatch();
  const { categories, api } = useSelector(state => state);

  const loading = api.categories.loading;

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <>
      {loading ? (
        <CategoryLoader />
      ) : (
        <ul className="categories">
          {categories.datas.map(category => (
            <li key={category._id}>
              <div className="inner">
                <div className="item">
                  <a href="#" className="link title">
                    {category.name}
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <style jsx>{`
        .categories {
          display: flex;
          flex-wrap: nowrap;
          padding: 1rem 0;
        }

        .categories li {
          flex: 0 0 auto;
        }

        .categories .inner {
          padding-right: 1.5rem;
        }

        .cover {
          height: 15rem;
          background-size: cover;
          border-radius: 6px;
          background-position: center center;
        }

        .link {
          color: var(--color-dark);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          width: 100%;
        }

        .title {
          font-size: 1.8rem;
          font-weight: 600;
          text-align: center;
          color: var(--color-primary);
        }

        .item {
          border: 1px solid var(--color-primary);
          border-radius: 50px;
          height: 4rem;
          padding: 0 1rem;
        }
      `}</style>
    </>
  );
};

export default Categories;
