import React from 'react';

const Sidebar = ({ open }) => {
  return (
    <>
      <div className={`sidebar ${open ? 'sidebar--open' : ''}`}></div>
      <style jsx>{`
        .sidebar {
          position: fixed;
          z-index: 10;
          top: 0;
          right: 0;
          width: 60%;
          height: 100%;
          bottom: 0;
          background-color: #fff;
          transform: translateX(100%);
          transition: all 0.3s;
        }

        .sidebar--open {
          transform: translateX(0);
        }
      `}</style>
    </>
  );
};

export default Sidebar;
