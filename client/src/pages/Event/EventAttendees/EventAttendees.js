import React from 'react';
import { Link } from 'react-router-dom';
import styles from './EventAttendees.module.css';
import { useQuery } from 'react-query';
import EventAPI from 'api/EventAPI';
import Avatar from 'components/Avatar';

const EventAttendees = ({ eventId }) => {
  const { isLoading, error, data } = useQuery(`attendees_${eventId}`, () =>
    EventAPI.getEventAttendees(eventId)
  );

  const attendees = data?.data.attendees || [];

  if (isLoading) {
    return <p>Loading... </p>;
  }

  return (
    <div>
      {attendees.length > 0 ? (
        <ul className={styles.attendees}>
          {attendees.map((attendee) => (
            <li className={styles.list} key={attendee._id}>
              <div className={styles.inner}>
                <Link to={`/profile/${attendee.user._id}`}>
                  <div className={styles.wrapper}>
                    {attendee.user.imageURL ? (
                      <img
                        className="avatar"
                        src="https://secure.meetupstatic.com/photos/member/e/6/c/b/member_243779083.jpeg"
                        alt=""
                      />
                    ) : (
                      <Avatar letter={attendee.user.name.charAt(0)} />
                    )}
                    <div className={styles.info}>
                      <div className={styles.name}>{attendee.user.name}</div>
                      <div className={styles.label}>Member</div>
                    </div>
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.msg}> No atendees yet. </div>
      )}
    </div>
  );
};

export default EventAttendees;
