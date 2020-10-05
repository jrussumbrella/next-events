import React from 'react';
import { useQuery } from 'react-query';
import EventAPI from '../../../api/EventAPI';
import EventList from '../../../components/EventList';
import EventListSkeleton from '../../../components/EventListSkeleton';

const HomeEvents = () => {
  const { isLoading, error, data } = useQuery(
    'homeEvents',
    EventAPI.getAllEvents
  );

  const events = data?.data.events;

  if (isLoading) {
    return <EventListSkeleton />;
  }

  if (error) {
    return <p> Something went wrong</p>;
  }

  return <EventList events={events} />;
};

export default HomeEvents;
