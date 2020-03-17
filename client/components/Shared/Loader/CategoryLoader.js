import React from 'react';

const CategoryLoader = ({}) => {
  const items = [...Array(4).keys()];
  return (
    <div>
      <ul className="list">
        {items.map((item, i) => (
          <li key={i}>
            <div className="box"></div>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .list {
          display: flex;
        }

        .list li {
          margin-right: 10px;
          flex: 1;
        }

        .box {
          background-color: var(--color-gray);
          height: 4rem;
          border-radius: 50px;
        }
      `}</style>
    </div>
  );
};

export default CategoryLoader;
