import React from 'react';
import { useQuery } from 'react-query';
import HomeCategories from './HomeCategories';
import Hero from '../../components/Hero';
import Container from '../../components/Container';
import EventAPI from '../../api/EventAPI';
import EventList from '../../components/Events/EventList';
import EventListSkeleton from '../../components/Events/EventListSkeleton';
import styles from './Home.module.css';

const Home = () => {
  const { isLoading: isLoadingUpcomingEvents, data: upcomingEvents } = useQuery(
    'homeEvents',
    EventAPI.getEvents
  );

  const events = upcomingEvents?.data.events;

  const renderEvents = () => {
    if (isLoadingUpcomingEvents) {
      return <EventListSkeleton />;
    }
    if (upcomingEvents) {
      return <EventList events={events} />;
    }
    return null;
  };

  return (
    <div>
      <Hero title="Find your next events." />
      <Container>
        <div className={styles.pageHeading}> Categories </div>
        <HomeCategories />
        <div className={styles.pageHeading}>Upcoming Events</div>
        {renderEvents()}
      </Container>
    </div>
  );
};

export default Home;
