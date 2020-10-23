import React from 'react';
import HomeEvents from './HomeEvents';
import HomeCategories from './HomeCategories';
import HomeBanner from './HomeBanner';
import styles from './styles.module.css';

const Home = () => (
  <div>
    <HomeBanner />
    <div className={styles.container}>
      <div className={styles.pageHeading}> Categories </div>
      <div className={styles.categoryWrapper}>
        <div className={styles.inner}>
          <HomeCategories />
        </div>
      </div>
      <div className={styles.pageHeading}>Upcoming Events</div>
      <HomeEvents />
    </div>
  </div>
);

export default Home;
