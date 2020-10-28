import React from 'react';
import { useParams } from 'react-router-dom';
import { MdDateRange } from 'react-icons/md';
import { FiMapPin } from 'react-icons/fi';
import { useQuery } from 'react-query';
import EventSkeleton from './EventSkeleton';
import EventAPI from '../../api/EventAPI';
import EventGroup from './EventGroup';
import styles from './Event.module.css';

const Event = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery(id, () => EventAPI.getEvent(id));

  const event = data?.data;

  if (isLoading) return <EventSkeleton />;

  return (
    <div>
      <ul className={styles.breadcrumb}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Events</a>
        </li>
        <li>
          <a href="#">{event.name}</a>
        </li>
      </ul>
      <div className={styles.topBar}>
        <div
          className={styles.coverImg}
          style={{
            backgroundImage: `url(${event.imageCoverURL})`,
          }}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.top}>
            <h1 className={styles.title}>{event.name}</h1>
          </div>
        </div>
        <div className={styles.extraDetails}>
          <div className={styles.date}>
            <MdDateRange color="var(--color-primary)" size={20} />
            <span>February 22, 2020</span>
          </div>
          <div className="place">
            <FiMapPin color="var(--color-primary)" size={20} />
            <span>{event?.location?.formattedAddress}</span>
          </div>
        </div>
        <div className={styles.description}>{data.description}</div>
        <div className={styles.mainMiddle}>
          <div className={styles.left}>
            {data.isFree ? (
              <span className={styles.text}>FREE</span>
            ) : (
              <span className={styles.text}>P200</span>
            )}
            <div className={styles.spot}>
              <span className={styles.spotNum}>
                {data.countAttendees - data.maxAttendees}
              </span>
              spots left.
            </div>
          </div>
          {/* <EventAction /> */}
        </div>
      </div>
      {/* <EventMap coordinates={data.location.coordinates} /> */}
      <EventGroup />
      <div className={styles.heading}>Attendees ({event.countAttendees})</div>
      {/* <EventAttendees attendees={data.attendees || []} /> */}
    </div>
  );
};

export default Event;
