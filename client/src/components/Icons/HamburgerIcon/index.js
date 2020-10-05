import React from 'react';
import './styles.css';

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
    </>
  );
};

export default HamburgerIcon;
