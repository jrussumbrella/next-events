import React from 'react';
import { useParams } from 'react-router-dom';
import { MdDateRange } from 'react-icons/md';
import { FiMapPin } from 'react-icons/fi';
import { useQuery } from 'react-query';
import Button from 'components/Button';
import EventSkeleton from './EventSkeleton';
import EventAPI from 'api/EventAPI';
import EventGroup from './EventGroup';
import EventAttendees from './EventAttendees';
import styles from './Event.module.css';
import Container from 'components/Container';

const Event = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery(id, () => EventAPI.getEvent(id));

  const event = data?.data;

  if (error) return <p>Something went wrong</p>;

  if (isLoading) return <EventSkeleton />;

  return (
    <Container className={styles.eventContainer}>
      <div
        className={styles.coverImg}
        style={{
          backgroundImage: `url(${event.imageCoverURL})`,
        }}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>{event.name}</h1>
        <div className={styles.extraDetails}>
          <div className={styles.date}>
            <MdDateRange color="var(--color-primary)" size={20} />
            <span>February 22, 2020</span>
          </div>
          <div className={styles.place}>
            <FiMapPin color="var(--color-primary)" size={20} />
            <span>{event?.location?.formattedAddress}</span>
          </div>
        </div>
        <div className={styles.description}>{data.description}</div>
      </div>
      <EventGroup group={event.group} />
      <div className={styles.heading}>Attendees ({event.countAttendees})</div>
      <EventAttendees attendees={[]} eventId={event._id} />
      <div className={styles.bottom}>
        <div className={styles.left}>
          {data.isFree ? (
            <p className={styles.text}>FREE</p>
          ) : (
            <p className={styles.text}>P200</p>
          )}
        </div>
        <div className={styles.right}>
          <div className={styles.spot}>
            <span className={styles.spotNum}>
              {event.countAttendees - event.maxAttendees}
            </span>
            spots left.
          </div>
          <Button title="Attend" className={styles.button} />
        </div>
      </div>
    </Container>
  );
};

export default Event;
