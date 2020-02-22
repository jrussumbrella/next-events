import React from 'react';

const Spinner = ({ color, size }) => {
  return (
    <>
      <div className="loader"></div>
      <style jsx>{`
        .loader,
        .loader:after {
          border-radius: 50%;
          width: ${size}em;
          height: ${size}em;
        }
        .loader {
          margin: 0px auto;
          font-size: 10px;
          position: relative;
          text-indent: -9999em;
          border-top: 0.3em solid rgba(255, 255, 255, 0.5);
          border-right: 0.3em solid rgba(255, 255, 255, 0.5);
          border-bottom: 0.3em solid rgba(255, 255, 255, 0.5);
          border-left: 0.3em solid ${color};
          -webkit-transform: translateZ(0);
          -ms-transform: translateZ(0);
          transform: translateZ(0);
          -webkit-animation: load8 1.1s infinite linear;
          animation: load8 1.1s infinite linear;
        }
        @-webkit-keyframes load8 {
          0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }
        @keyframes load8 {
          0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
};

export default Spinner;
