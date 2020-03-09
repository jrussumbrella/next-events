import React from 'react';

const Categories = () => {
  return (
    <>
      <ul className="categories">
        <li>
          <div className="inner">
            <div className="item">
              <a href="#" className="link title">
                Tech
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className="inner">
            <div className="item">
              <a href="#" className="link title">
                Tech
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className="inner">
            <div className="item">
              <a href="#" className="link title">
                Tech
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className="inner">
            <div className="item">
              <a href="#" className="link title">
                Tech
              </a>
            </div>
          </div>
        </li>
      </ul>
      <style jsx>{`
        .categories {
          display: flex;
          flex-wrap: nowrap;
          padding: 1rem 0;
        }

        .categories li {
          width: 15rem;
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
        }
      `}</style>
    </>
  );
};

export default Categories;
