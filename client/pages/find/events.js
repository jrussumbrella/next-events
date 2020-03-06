import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import {} from '../../store/groups/groupsActions';
import EventList from '../../components/Shared/Events/EventList';
import { getAllEvents } from '../../store/events/eventsAction';
import Banner from '../../components/Shared/Banner';

const Events = () => {
  const dispatch = useDispatch();
  const { allEvents } = useSelector(state => state.events);

  return (
    <Layout>
      <Banner />
      <div className="container">
        <EventList events={allEvents} />
      </div>
      <style jsx>{`
        .container {
          padding: 2rem;
        }
      `}</style>
    </Layout>
  );
};

Events.getInitialProps = async ctx => {
  const page = 1;
  ctx.store.dispatch(getAllEvents(page));
  return {};
};

export default Events;
