import React from 'react';
import PropTypes from 'prop-types';

const ListMediaLoader = ({ numbers = 1 }) => {
  const items = [...Array(numbers).keys()];

  return (
    <>
      <div className="wrapper">
        {items.map(item => (
          <div className="item" key={item}>
            <div className="circle"></div>
            <div className="right">
              <div className="line" style={{ width: 200 }}></div>
              <div className="line"></div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .item {
          display: flex;
          margin-top: 1rem;
        }

        .circle {
          width: 6rem;
          height: 6rem;
          background-color: var(--color-light-gray);
          border-radius: 50%;
        }

        .right {
          flex: 1;
          padding-left: 1rem;
        }

        .line {
          width: 100%;
          height: 2.5rem;
          background-color: var(--color-light-gray);
          margin-bottom: 10px;
        }
      `}</style>
    </>
  );
};

ListMediaLoader.propTypes = {
  numbers: PropTypes.number.isRequired
};

export default ListMediaLoader;
