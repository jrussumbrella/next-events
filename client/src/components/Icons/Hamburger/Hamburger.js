import React from 'react';
import './Hamburger.css';

const Hamburger = ({ active, onClick }) => (
  <>
    <button
      onClick={onClick}
      className={`hamburger hamburger--squeeze ${active ? 'is-active' : ''}
       `}
      type="button"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </button>
  </>
);

export default Hamburger;
