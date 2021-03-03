import React from 'react';

const HamburgerIcon = ({ active, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`hamburger hamburger--squeeze ${active ? 'is-active' : ''}
       `}
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <style jsx>{`
        .hamburger {
          background-color: #000;
          padding: 1rem 1rem;
          display: inline-block;
          cursor: pointer;
          transition-property: opacity, filter;
          transition-duration: 0.15s;
          transition-timing-function: linear;
          font: inherit;
          color: inherit;
          text-transform: none;
          background-color: transparent;
          border: 0;
          margin: 0;
          overflow: visible;
        }
        .hamburger:hover {
          opacity: 0.7;
        }
        .hamburger.is-active:hover {
          opacity: 0.7;
        }
        .hamburger.is-active .hamburger-inner,
        .hamburger.is-active .hamburger-inner::before,
        .hamburger.is-active .hamburger-inner::after {
          background-color: #000;
        }

        .hamburger-box {
          width: 30px;
          height: 1rem;
          display: inline-block;
          position: relative;
        }

        .hamburger-inner {
          display: block;
          top: 50%;
          margin-top: -2px;
        }
        .hamburger-inner,
        .hamburger-inner::before,
        .hamburger-inner::after {
          width: 30px;
          height: 3px;
          background-color: #000;
          border-radius: 4px;
          position: absolute;
          transition-property: transform;
          transition-duration: 0.15s;
          transition-timing-function: ease;
        }
        .hamburger-inner::before,
        .hamburger-inner::after {
          content: '';
          display: block;
        }
        .hamburger-inner::before {
          top: -10px;
        }
        .hamburger-inner::after {
          bottom: -10px;
        }

        .hamburger--squeeze .hamburger-inner {
          transition-duration: 0.075s;
          transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
        }
        .hamburger--squeeze .hamburger-inner::before {
          transition: top 0.075s 0.12s ease, opacity 0.075s ease;
        }
        .hamburger--squeeze .hamburger-inner::after {
          transition: bottom 0.075s 0.12s ease,
            transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
        }

        .hamburger--squeeze.is-active .hamburger-inner {
          transform: rotate(45deg);
          transition-delay: 0.12s;
          transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        .hamburger--squeeze.is-active .hamburger-inner::before {
          top: 0;
          opacity: 0;
          transition: top 0.075s ease, opacity 0.075s 0.12s ease;
        }
        .hamburger--squeeze.is-active .hamburger-inner::after {
          bottom: 0;
          transform: rotate(-90deg);
          transition: bottom 0.075s ease,
            transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
        }
      `}</style>
    </>
  );
};

export default HamburgerIcon;