import React, { useEffect } from 'react';
import { dispatch, useSelector, useDispatch } from 'react-redux';
import { getGroupEvents } from '../../store/groups/groupsActions';
import EventList from '../Shared/Events/EventList';

const GroupEvents = () => {
  const dispatch = useDispatch();
  const { group, groupEvents } = useSelector(state => state.groups);

  useEffect(() => {
    groupEvents.length === 0 && dispatch(getGroupEvents(group._id));
  }, []);

  return (
    <div>
      <EventList events={groupEvents} />
    </div>
  );
};

export default GroupEvents;
