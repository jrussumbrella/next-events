import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TabList = ({ tabs, activeTab, onTabChange }) => {
  const [active, setActive] = useState(activeTab);

  const handleTabChange = value => {
    onTabChange(value);
    setActive(value);
  };

  return (
    <>
      {tabs.length > 0 && (
        <ul className="tabs">
          {tabs.map((tab, i) => (
            <li
              key={i}
              className={`${active === tab ? 'active' : ''}`}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>
      )}
      <style jsx>{`
        .tabs {
          display: flex;
          padding: 1rem 2rem;
        }

        .tabs li {
          font-size: 2rem;
          flex: 1;
          text-align: center;
          padding: 1rem 0;
          cursor: pointer;
        }

        .tabs li.active {
          border-bottom: 2px solid var(--color-primary);
          color: var(--color-primary);
        }
      `}</style>
    </>
  );
};

TabList.propTypes = {
  tabs: PropTypes.array.isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired
};

export default TabList;
