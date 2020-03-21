import React from 'react';

const UserLoader = () => {
  return (
    <div>
      <div className="box"></div>
      <div className="circle"></div>
      <style jsx>
        {`
          .box {
            height: 15rem;
            width: 100%;
            background-color: var(--color-light-gray);
          }

          .circle {
            width: 10rem;
            height: 10rem;
            border-radius: 50%;
            background-color: var(--color-light-gray);
            border: 2px solid #fff;
            margin-top: -5rem;
            margin-left: 2rem;
          }
        `}
      </style>
    </div>
  );
};

export default UserLoader;
