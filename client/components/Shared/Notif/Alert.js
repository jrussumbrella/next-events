import React from 'react';

const Alert = ({ type, message }) => {
  return (
    <>
      <div className={`alert ${type}`}>{message}</div>
      <style jsx>{`
        .alert {
          border-radius: 3px;
          padding: 2rem 1.5rem;
          margin: 2rem 0;
        }

        .error {
          background-color: #fbe1e3;
          color: #c00;
          font-size: 1.8rem;
        }
      `}</style>
    </>
  );
};

export default Alert;
