import React from 'react';
import { MdDateRange } from 'react-icons/md';
import { FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { formatDate, formatTime } from '../../utils/formatDate';
import styles from './styles.module.css';

const EventList = ({ events }) => {
  if (events.length === 0) {
    return <div className={styles.msg}> No Events yet. </div>;
  }

  return (
    <>
      <div className={events.events}>
        {events.map((event) => (
          <div className={styles.eventList} key={event._id}>
            <div className={styles.eventCard}>
              <Link to={`/events/${event.slug}`} className="link">
                <div className={styles.imgWrapper}>
                  <img src={event.imageCoverURL} alt={event.name} />
                </div>
                <div className={styles.info}>
                  <div className={styles.name}>{event.name}</div>
                  <div className={styles.location}>
                    <FiMapPin color={`var(--color-primary)`} size={18} />
                    <span className={styles.text}>{event.location?.city}</span>
                  </div>
                  <div className={styles.date}>
                    <MdDateRange color={`var(--color-primary)`} size={18} />
                    <span className={styles.text}>
                      {formatDate(event.date)} at {formatTime(event.date)}
                    </span>
                  </div>
                  <div className={styles.bottom}>
                    <div className={styles.attendeeText}>
                      {event.countAttendees} attendees
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default EventList;
