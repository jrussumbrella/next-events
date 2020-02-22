import React from 'react';

const Categories = () => {
  return (
    <>
      <ul className="categories">
        <li>
          <div className="inner">
            <a href="#" className="link">
              <div>
                <div
                  className="cover"
                  style={{
                    backgroundImage: `url(https://secure.meetupstatic.com/photos/event/2/e/a/7/600_450131943.jpeg)`
                  }}
                ></div>
                <p className="title"> Tech </p>
              </div>
            </a>
          </div>
        </li>
        <li>
          <div className="inner">
            <a href="#" className="link">
              <div>
                <div
                  className="cover"
                  style={{
                    backgroundImage: `url(https://secure.meetupstatic.com/photos/event/2/e/a/7/600_450131943.jpeg)`
                  }}
                ></div>
                <p className="title"> Tech </p>
              </div>
            </a>
          </div>
        </li>
      </ul>
      <style jsx>{`
        .categories {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 2rem;
          padding: 1rem 0;
        }

        .categories .inner {
        }

        .cover {
          height: 15rem;
          background-size: cover;
          border-radius: 6px;
          background-position: center center;
        }

        .link {
          color: var(--color-dark);
        }

        .title {
          font-size: 1.8rem;
          padding-top: 1rem;
          font-weight: 600;
        }
      `}</style>
    </>
  );
};

export default Categories;
