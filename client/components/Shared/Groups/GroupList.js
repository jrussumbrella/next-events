import React from 'react';
import { FiMapPin } from 'react-icons/fi';
import Link from 'next/link';

const GroupList = ({ groups }) => {
  return (
    <div>
      <div className="events">
        <div className="event-list">
          <div className="event-card">
            <Link href="/">
              <a className="link">
                <div className="img-wrapper">
                  <img
                    src={`https://secure.meetupstatic.com/photos/event/9/0/e/5/600_454117093.jpeg`}
                    alt=""
                  />
                </div>
                <div className="info">
                  <div className="name">CA After Party</div>
                  <div className="location">
                    <FiMapPin color={`var(--color-primary)`} size={18} />
                    <span className="text"> Manila, Ph</span>
                  </div>
                  <div className="bottom">
                    <div className="attende-text"> 15 Members </div>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .events {
            margin: 2rem 0;
            display: grid;
          }

          .event-card {
            box-shadow: 0 0 4px 0 rgba(46, 62, 72, 0.12),
              0 4px 12px 0 rgba(46, 62, 72, 0.12);
            overflow: hidden;
            border-radius: 6px 6px 0px 0;
          }

          .img-wrapper {
            padding-bottom: 56.25%;
            width: 100%;
            position: relative;
          }

          .link {
            color: var(--color-dark);
          }

          .img-wrapper img {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .info {
            padding: 1.5rem;
          }

          .name {
            font-size: 1.6rem;
          }

          .location,
          .date {
            padding: 0.5rem 0;
            display: flex;
            align-items: center;
          }

          .text {
            padding-left: 0.5rem;
          }

          .bottom {
            padding-top: 1rem;
          }

          .attende-text {
            color: var(--color-gray);
          }
        `}
      </style>
    </div>
  );
};

export default GroupList;
