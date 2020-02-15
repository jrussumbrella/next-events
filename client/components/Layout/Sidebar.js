import React, { forwardRef, memo } from 'react';
import Link from 'next/link';

const Sidebar = ({ open, handleClick }, ref) => {
  return (
    <>
      <div ref={ref} className={`sidebar ${open ? 'sidebar--open' : ''}`}>
        <ul className="sidebar-list">
          <li onClick={handleClick}>
            <Link href="/login">
              <a> Login </a>
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link href="/login">
              <a> Sign Up </a>
            </Link>
          </li>
        </ul>
      </div>
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
          transform: translateX(100vw);
          transition: all 0.3s;
          display: flex;
          justify-content: center;
          box-shadow: rgba(2, 12, 27, 0.7) -10px 0px 10px -15px;
        }

        .sidebar--open {
          transform: translateX(0);
        }

        .sidebar-list {
          margin-top: 8rem;
          width: 100%;
        }

        .sidebar-list li {
          padding: 1rem 0;
          text-align: center;
        }

        .sidebar-list a {
          color: var(--color-dark);
          font-size: 1.7rem;
          display: block;
        }
      `}</style>
    </>
  );
};

const forwardSidebar = forwardRef(Sidebar);

export default memo(forwardSidebar);
