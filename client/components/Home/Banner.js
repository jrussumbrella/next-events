import React from 'react';

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="title"> Find your next events.</div>
      </div>
      <style jsx>{`
        .banner {
          height: 20rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          background-color: var(--color-primary);
        }

        .title {
          font-size: 3rem;
          font-weight: 600;
          color: #ffff;
        }
      `}</style>
    </>
  );
};

export default Banner;
