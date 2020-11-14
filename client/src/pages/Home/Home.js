import React from 'react';
import { useQuery } from 'react-query';
import Hero from 'components/Hero';
import Container from 'components/Container';
import EventAPI from 'api/EventAPI';
import EventList from 'components/Events/EventList';
import EventListSkeleton from 'components/Events/EventListSkeleton';
import Button from 'components/Button';
import CategoryAPI from 'api/CategoryAPI';
import GroupAPI from 'api/GroupAPI';
import GroupList from 'components/Groups/GroupList';
import GroupsSkeleton from 'components/Groups/GroupsSkeleton';
import CategoriesSkeleton from 'components/Categories/CategoriesSkeleton';
import Categories from 'components/Categories';
import styles from './Home.module.css';

const Home = () => {
  const { isLoading: isLoadingUpcomingEvents, data: upcomingEvents } = useQuery(
    'homeEvents',
    EventAPI.getEvents
  );
  const { isLoading: isLoadingGroups, data: mostPopularGroups } = useQuery(
    'homeGroups',
    GroupAPI.getGroups
  );
  const { isLoading: isLoadingCategories, data: homeCategories } = useQuery(
    'homeCategories',
    CategoryAPI.getCategories
  );

  const categories = homeCategories?.data.categories;
  const events = upcomingEvents?.data.events;
  const groups = mostPopularGroups?.data.groups;

  const renderCategories = () => {
    if (isLoadingCategories) {
      return <CategoriesSkeleton />;
    }

    if (categories) {
      return <Categories categories={categories} />;
    }

    return null;
  };

  const renderGroups = () => {
    if (isLoadingGroups) {
      return <GroupsSkeleton />;
    }

    if (groups) {
      return <GroupList groups={groups} />;
    }

    return null;
  };

  const renderEvents = () => {
    if (isLoadingUpcomingEvents) {
      return <EventListSkeleton />;
    }

    if (events) {
      return <EventList events={events} />;
    }

    return null;
  };

  return (
    <div>
      <Hero title="Find your next events." />
      <Container>
        <div className={styles.pageHeading}> Categories </div>
        {renderCategories()}
        <div className={styles.pageHeading}>Most Popular Groups</div>
        {renderGroups()}
        <div className={styles.buttonContainer}>
          <Button title="View All Groups" href="/groups" />
        </div>
        <div className={styles.pageHeading}>Upcoming Events</div>
        {renderEvents()}
        <div className={styles.buttonContainer}>
          <Button title="View All Events" href="/events" />
        </div>
      </Container>
    </div>
  );
};

export default Home;
