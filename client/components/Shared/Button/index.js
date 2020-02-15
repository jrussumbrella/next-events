import React from 'react';
import { Spinner } from '../Loader';

const Button = ({ type, title, size, style, onClick, classType, loading }) => {
  return (
    <>
      <button
        type={type}
        className={`btn ${classType}`}
        style={style}
        onClick={onClick}
        disabled={loading}
      >
        {loading ? <Spinner size={3} color={`#fff`} /> : title}
      </button>
      <style jsx>{`
        .btn {
          border: 1px solid var(--color-primary);
          background-color: #fff;
          color: var(--color-primary);
          font-size: ${size}rem;
          height: 5rem;
          width: 100%;
          display: flex;
          align-items: center;
          text-align: center;
          justify-content: center;
          border-radius: 6px;
          cursor: pointer;
        }

        .btn:disabled {
          opacity: 0.8;
        }

        .btn.primary {
          background-color: var(--color-primary);
          color: #fff;
        }
      `}</style>
    </>
  );
};

export default Button;
