import React from 'react';
import { Link } from 'react-router-dom';
import styles from './EventGroup.module.css';

const EventGroup = ({ group }) => {
  return (
    <div>
      <Link to={`/groups/${group.name}`} className={styles.Link}>
        <div className={styles.group}>
          <img
            className={styles.img}
            src={`https://secure.meetupstatic.com/photos/event/d/c/e/3/highres_465236547.jpeg`}
            alt=""
          />
          <div className={styles.info}>
            <p className={styles.title}>{group.name}</p>
            <div className={styles.mode}>Public Group</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EventGroup;
