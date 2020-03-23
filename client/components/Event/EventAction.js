import React, { useState } from 'react';
import Button from '../Shared/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  attendEvent,
  getEventAttendees
} from '../../store/events/eventsAction';
import { leaveEvent } from '../../store/events/eventsAction';
import { setAlert } from '../../store/alert/alertAction';

const EventAction = () => {
  const { auth, events } = useSelector(state => state);
  const { user } = auth;
  const { selected } = events;
  const dispatch = useDispatch();

  const handleAttend = async action => {
    if (user) {
      if (action === 'attend') {
        await dispatch(attendEvent(selected._id));
      } else {
        await dispatch(leaveEvent(selected._id));
      }
      dispatch(getEventAttendees(selected._id));
    } else {
      dispatch(setAlert('error', 'Please login before attending this event'));
    }
  };

  return (
    <div>
      <div className="container">
        {user && user.events.find(attendee => attendee === selected._id) ? (
          <Button
            title="Cancel Attend"
            size={2}
            classType={'primary'}
            onClick={() => handleAttend('cancel')}
          />
        ) : (
          <Button
            title="Attend"
            size={2}
            classType={'primary'}
            onClick={() => handleAttend('attend')}
          />
        )}
      </div>
      <style jsx>{`
        .container {
          padding: 1rem 0;
        }
      `}</style>
    </div>
  );
};

export default EventAction;
