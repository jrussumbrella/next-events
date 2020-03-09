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

  return (
    <Layout>
      <Banner />
      <div className="container">
        <div className="page-heading"> Categories </div>
        <div className="category-wrapper">
          <div className="inner">
            <Categories />
          </div>
        </div>
        <div className="page-heading">Upcoming Events</div>
        <EventList events={events.upcoming} />
        <div className="view-all-container">
          <Button type="button" title="See All Events" href="/find/events" />
        </div>
        <div className="page-heading">Most Popular Groups</div>
        <GroupList groups={groups.mostPopular} />
        <div className="view-all-container">
          <Button type="button" title="See All Groups" href="/find/groups" />
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

        ::-webkit-scrollbar {
          display: none;
        }

        .category-wrapper {
          margin: 0 -2rem;
          -webkit-overflow-scrolling: touch;
          overflow-x: auto;
        }

        .inner {
          padding-left: 2rem;
        }
      `}</style>
    </Layout>
  );
};

Home.getInitialProps = async ctx => {
  await ctx.store.dispatch(getGroups());
  await ctx.store.dispatch(getEvents());
  return {};
};

export default Home;
