import React from 'react';

const GridLoader = () => {
  return (
    <>
      <ul className="list">
        <li>
          <div className="box"></div>
          <div className="line-container">
            <div className="line"></div>
            <div className="line" style={{ width: '50%' }}></div>
            <div className="line" style={{ width: '30%' }}></div>
          </div>
        </li>
      </ul>
      <style jsx>{`
        .list {
          margin: 2rem 0;
          box-shadow: 0 0 4px 0 rgba(46, 62, 72, 0.12),
            0 4px 12px 0 rgba(46, 62, 72, 0.12);
        }

        .box {
          background-color: var(--color-light-gray);
          overflow: hidden;
          border-radius: 6px 6px 0px 0;
          padding-bottom: 56.25%;
          width: 100%;
        }

        .line-container {
          padding: 1rem;
        }

        .line {
          width: 100%;
          height: 2rem;
          background-color: var(--color-light-gray);
          margin-bottom: 1rem;
        }
      `}</style>
    </>
  );
};

export default GridLoader;
