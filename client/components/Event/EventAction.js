import React from 'react';
import Button from '../Shared/Button';

const EventAction = () => {
  return (
    <div>
      <div className="container">
        <Button title="Join Event" size={2} classType={'primary'} />
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
