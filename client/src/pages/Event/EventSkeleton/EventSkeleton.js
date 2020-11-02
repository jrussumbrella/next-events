import React from 'react';
import Container from 'components/Container';
import styles from './EventSkeleton.module.css';

const EventSkeleton = () => {
  return (
    <Container className={styles.mainContainer}>
      <div className={styles.bigImage} />
      <div className={styles.info}>
        <div className={styles.line} style={{ width: '50%', height: '3rem' }} />
        <div className={styles.line} style={{ width: '20%' }} />
        <div className={styles.line} style={{ width: '20%' }} />
      </div>
    </Container>
  );
};

export default EventSkeleton;
