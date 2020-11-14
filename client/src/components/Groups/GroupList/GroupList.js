import React from 'react';
import { Link } from 'react-router-dom';
import styles from './GroupList.module.css';

const GroupList = ({ groups }) => {
  if (groups.length === 0) {
    return <div> No groups yet. </div>;
  }

  return (
    <div className={styles.groupListContainer}>
      {groups.map((group) => (
        <div key={group._id} className={styles.groups}>
          <Link to={`/groups/${group.slug}`}>
            <div className={styles.inner}>
              <div
                className={styles.imgCover}
                style={{ backgroundImage: `url(${group.image_url})` }}
              ></div>
              <div className={styles.overlay}></div>
              <div className={styles.info}>
                <div className={styles.name}>{group.name}</div>
                <div className={styles.member}>
                  {group.count_members} Members
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default GroupList;
