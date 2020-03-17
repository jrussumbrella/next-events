import React from 'react';
import { MdDateRange } from 'react-icons/md';
import { FiMapPin } from 'react-icons/fi';
import Link from 'next/link';
import { formatDate, formatTime } from '../../../utils/formatDate';

const EventList = ({ events }) => {
  return (
    <div>
      {events.length === 0 ? (
        <div className="msg"> No Events yet. </div>
      ) : (
        <div className="events">
          {events.map(event => (
            <div className="event-list" key={event._id}>
              <div className="event-card">
                <Link href={`/events/[slug]`} as={`/events/${event.slug}`}>
                  <a className="link">
                    <div className="img-wrapper">
                      <img src={event.imageCoverURL} alt={event.name} />
                    </div>
                    <div className="info">
                      <div className="name">{event.name}</div>
                      <div className="location">
                        <FiMapPin color={`var(--color-primary)`} size={18} />{' '}
                        <span className="text">{event.location?.city}</span>
                      </div>
                      <div className="date">
                        <MdDateRange color={`var(--color-primary)`} size={18} />{' '}
                        <span className="text">
                          {formatDate(event.date)} at {formatTime(event.date)}
                        </span>
                      </div>
                      {/* <div className="bottom">
                        <div className="attende-text">
                          {' '}
                          {event.attendees.length} attendees{' '}
                        </div>
                      </div> */}
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
      <style jsx>
        {`
          .events {
            margin: 2rem 0;
            display: grid;
            grid-gap: 2rem;
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
            background-color: var(--color-gray);
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
            padding-left: 0.6rem;
            flex: 1;
          }

          .bottom {
            padding-top: 1rem;
          }

          .attende-text {
            color: var(--color-gray);
          }

          .msg {
            text-align: center;
            font-size: 1.8rem;
            padding: 2rem 0;
          }
        `}
      </style>
    </div>
  );
};

export default EventList;
