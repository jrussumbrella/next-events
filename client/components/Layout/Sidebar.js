import React, { forwardRef, memo } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../Shared/Button';
import { logout } from '../../store/user/userAction';
import Router from 'next/router';

const Sidebar = ({ open, handleClick }, ref) => {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleCreateEvent = () => {
    if (user) {
      Router.push('/group/create');
    } else {
      Router.push('/login');
    }
  };

  return (
    <>
      <div ref={ref} className={`sidebar ${open ? 'sidebar--open' : ''}`}>
        <ul className="sidebar-list">
          {!user ? (
            <>
              <li onClick={handleClick}>
                <Link href="/login">
                  <a> Login </a>
                </Link>
              </li>
              <li onClick={handleClick}>
                <Link href="/signup">
                  <a> Sign Up </a>
                </Link>
              </li>
            </>
          ) : (
            <>
              <div className="welcome">
                Hello, <span>{user.name}</span>
              </div>
              <li onClick={handleClick}>
                <Link href="/user/[username]" as={`/user/${user._id}`}>
                  <a> My Account </a>
                </Link>
              </li>
              <li>
                <Link href="/settings">
                  <a> Settings </a>
                </Link>
              </li>
              <li>
                <Button
                  type="button"
                  title="Logout"
                  onClick={handleLogout}
                  size={1.8}
                  classType="link"
                />
              </li>
            </>
          )}
          <li>
            <Button
              type="button"
              title="Create a group"
              onClick={handleCreateEvent}
              size={1.8}
            />
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
          text-align: center;
          padding: 0 1.5rem;
        }

        .sidebar-list a {
          color: var(--color-dark);
          font-size: 1.7rem;
          display: block;
          padding: 1rem 2rem;
        }

        .welcome {
          text-align: center;
          padding: 2rem 0;
          font-size: 1.7rem;
        }
      `}</style>
    </>
  );
};

const forwardSidebar = forwardRef(Sidebar);

export default memo(forwardSidebar);
