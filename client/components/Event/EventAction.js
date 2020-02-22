import React, { useState } from 'react';
import Button from '../Shared/Button';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAttend } from '../../store/events/eventsAction';

const EventAction = () => {
  const [attending, setAttending] = useState(false);
  const { auth, events } = useSelector(state => state);
  const { user } = auth;
  const { selected } = events;
  const dispatch = useDispatch();

  const handleJoin = async () => {
    if (user) {
      setAttending(true);
      await dispatch(toggleAttend(selected._id));
      setAttending(false);
    } else {
      alert('You need to login to join this event');
    }
  };

  return (
    <div>
      <div className="container">
        {user &&
        selected.attendees.find(attendee => attendee.attendee === user._id) ? (
          <Button
            title="Cancel Attend"
            size={2}
            classType={'primary'}
            onClick={handleJoin}
            loading={attending}
          />
        ) : (
          <Button
            title="Attend"
            size={2}
            classType={'primary'}
            onClick={handleJoin}
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
