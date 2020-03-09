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
        }

        .title {
          font-size: 1.8rem;
          padding-top: 1rem;
          font-weight: 600;
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default Categories;
