import React from 'react';
import Spinner from './Spinner';

const PageLoader = () => {
  return (
    <>
      <div className="loader">
        <Spinner color={`var(--color-primary)`} size={8} />
      </div>
      <style jsx>{`
        .loader {
          position: fixed;
          z-index: 12;
          top: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(255, 255, 255, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  );
};

export default PageLoader;
