import React, { forwardRef, memo } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Button';
import styles from './styles.module.css';

const SidebarLink = ({ handleClick, link, title }) => {
  return (
    <li onClick={handleClick}>
      <Link to={link}>{title}</Link>
    </li>
  );
};

const Sidebar = ({ open, handleClick }, ref) => {
  const user = null;

  const handleLogout = () => {};

  const handleCreateEvent = () => {};

  const unAuthLinks = () => {
    return (
      <>
        <SidebarLink handleClick={handleClick} link="/login" title="Log In" />
        <SidebarLink
          handleClick={handleClick}
          link="/sign-up"
          title="Sign Up"
        />
      </>
    );
  };

  const authLinks = () => {
    return (
      <>
        <SidebarLink
          handleClick={handleClick}
          link="/profile"
          title="Profile"
        />
        <SidebarLink
          handleClick={handleClick}
          link="/settings"
          title="Settings"
        />
        <li>
          <Button
            type="button"
            title="Logout"
            onClick={handleLogout}
            classType="link"
          />
        </li>
      </>
    );
  };

  const linksElement = user ? authLinks() : unAuthLinks();

  const userInfoElement = user ? (
    <div className={styles.welcome}>
      Hello, <span>{user.name}</span>
    </div>
  ) : null;

  return (
    <>
      <div
        ref={ref}
        className={`${styles.sidebar} ${open ? styles.sidebarOpen : ''}`}
      >
        <ul className={styles.sidebarList}>
          {userInfoElement}
          {linksElement}
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
    </>
  );
};

const forwardSidebar = forwardRef(Sidebar);

export default memo(forwardSidebar);
