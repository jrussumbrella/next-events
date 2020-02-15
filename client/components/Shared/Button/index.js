import React from 'react';

const Button = ({ type, title }) => {
  return (
    <>
      <button type={type} className="btn">
        {title}
      </button>
      <style jsx>{`
        .btn {
          border: 1px solid var(--color-primary);
          background-color: #fff;
          color: var(--color-primary);
          font-size: 1.6rem;
          height: 5rem;
          width: 100%;
          display: flex;
          align-items: center;
          text-align: center;
          justify-content: center;
          border-radius: 6px;
        }
      `}</style>
    </>
  );
};

export default Button;
