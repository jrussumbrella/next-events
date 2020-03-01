import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Banner, Categories } from '../components/Home';
import EventList from '../components/Shared/Events/EventList';
import GroupList from '../components/Shared/Groups/GroupList';
import Button from '../components/Shared/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getGroups } from '../store/groups/groupsActions';
import { getEvents } from '../store/events/eventsAction';

const Home = () => {
  const { groups, events } = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGroups());
    dispatch(getEvents());
  }, []);

  return (
    <Layout>
      <Banner />
      <div className="container">
        <div className="page-heading"> Categories </div>
        <Categories />
        <div className="page-heading">Upcoming Events</div>
        <EventList events={events.upcoming} />
        <div className="view-all-container">
          <Button type="button" title="View All Events" />
        </div>
        <div className="page-heading">Most Popular Groups</div>
        <GroupList groups={groups.mostPopular} />
        <div className="view-all-container">
          <Button type="button" title="View All Groups" />
        </div>
      </div>
      <style jsx>{`
        .container {
          margin: 3rem 2rem;
        }
        .page-heading {
          font-size: 2rem;
          font-weight: 600;
        }

        .view-all-container {
          margin: 2rem 0;
        }
      `}</style>
    </Layout>
  );
};

export default Home;
