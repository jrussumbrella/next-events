import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Banner } from '../components/Home';
import EventList from '../components/Shared/Events/EventList';
import GroupList from '../components/Shared/Groups/GroupList';
import Button from '../components/Shared/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getGroups } from '../store/groups/groupsActions';

const Home = () => {
  const { groups } = useSelector(state => state.groups);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGroups());
  }, []);

  return (
    <Layout>
      <Banner />
      <div className="container">
        <div className="page-heading">Upcoming Events</div>
        <EventList />
        <div className="view-all-container">
          <Button type="button" title="View All Events" />
        </div>
        <div className="page-heading">Groups You May Like</div>
        <GroupList />
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
