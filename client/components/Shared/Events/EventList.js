import React from 'react';
import { MdDateRange } from 'react-icons/md';
import { FiMapPin } from 'react-icons/fi';
import Link from 'next/link';

const EventList = ({ events }) => {
  return (
    <div>
      <div className="events">
        <div className="event-list">
          <div className="event-card">
            <Link href="/">
              <a className="link">
                <div className="img-wrapper">
                  <img
                    src={`https://demo.gloriathemes.com/eventchamp/demo/wp-content/uploads/2018/11/event-12-952x579.jpg`}
                    alt=""
                  />
                </div>
                <div className="info">
                  <div className="name">CA After Party</div>
                  <div className="location">
                    <FiMapPin color={`var(--color-primary)`} size={18} />{' '}
                    <span className="text"> Manila, Ph</span>
                  </div>
                  <div className="date">
                    <MdDateRange color={`var(--color-primary)`} size={18} />{' '}
                    <span className="text">February 14, 2019, 9:00 am</span>
                  </div>
                  <div className="bottom">
                    <div className="attende-text"> 15 attendees </div>
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
          }

          .img-wrapper {
            overflow: hidden;
            border-radius: 6px 6px 0px 0;
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

export default EventList;
