import React from 'react';
import { useSelector } from 'react-redux';

const Toast = () => {
  const { alert } = useSelector(state => state.alert);

  return (
    <>
      <div className={`alert-container ${alert.active ? 'show' : ''}`}>
        <div className={`alert ${alert.type}`}>{alert.text}</div>
      </div>
      <style jsx>{`
        .alert-container {
          position: fixed;
          top: 60px;
          right: 0;
          left: 0;
          z-index: 999;
          width: 100%;
          padding: 1rem;
          visibility: hidden;
        }

        .show {
          visibility: visible;
          -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
          animation: fadein 0.5s, fadeout 0.5s 2.5s;
        }

        .alert {
          border-radius: 3px;
          padding: 2rem 1.5rem;
          font-size: 1.7rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .success {
          background-color: #8bc34a;
          color: #fff;
        }

        .error {
          background-color: #fbe1e3;
          color: #c00;
          font-size: 1.8rem;
        }

        @keyframes fadein {
          from {
            top: 0;
            opacity: 0;
          }
          to {
            to: 60px;
            opacity: 1;
          }
        }

        @keyframes fadeout {
          from {
            top: 60px;
            opacity: 1;
          }
          to {
            top: 0;
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Toast;
