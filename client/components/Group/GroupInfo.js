import React from 'react';
import { MdPlace, MdSupervisorAccount, MdAccountCircle } from 'react-icons/md';
import {} from 'react-redux';
import PropTypes from 'prop-types';

const GroupInfo = ({ group }) => {
  return (
    <>
      <div className="banner">
        <div
          className="banner-img"
          style={{
            backgroundImage: `url(${group?.imageCoverURL})`
          }}
        ></div>
      </div>
      <div className="info">
        <div className="title">{group.name}</div>
        <div className="mini">
          <ul className="mini-list">
            <li>
              <span className="icon">
                <MdPlace size={22} />
              </span>
              <p className="text">{group.location.formattedAddress}</p>
            </li>
            <li>
              <span className="icon">
                <MdSupervisorAccount size={22} />
              </span>
              <p className="text">{group.countMembers} Members</p>
            </li>
            <li>
              <span className="icon">
                <MdAccountCircle size={22} />
              </span>
              <p className="text">Organized by {group.owner.name}</p>
            </li>
          </ul>
        </div>
        <div className="heading">About</div>
        <div className="description">{group.description}</div>
      </div>
      <style jsx>{`
        .heading {
          font-size: 2.2rem;
          padding-top: 1rem;
        }
        .banner {
          height: 30rem;
          position: relative;
        }

        .banner-img {
          width: 100%;
          height: 100%;
          background-size: cover;
        }

        .title {
          font-size: 3rem;
          font-weight: 600;
          color: var(--color-light-dark);
        }

        .info {
          padding: 2rem;
        }

        .description {
          font-size: 1.6rem;
          padding: 1rem 0;
          line-height: 1.5;
        }

        .mini {
          padding: 1rem 0;
        }

        .mini-list li {
          display: flex;
          align-items: center;
          height: 3rem;
        }

        .mini-list li .icon {
          padding-right: 0.5rem;
        }

        .min-list li .text {
          font-size: 1.7rem;
          margin: 0;
        }
      `}</style>
    </>
  );
};

GroupInfo.propTypes = {
  group: PropTypes.object.isRequired
};

export default GroupInfo;
