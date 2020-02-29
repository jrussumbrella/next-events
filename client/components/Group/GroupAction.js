import React from 'react';
import Button from '../Shared/Button';

const GroupAction = () => {
  return (
    <div className="container">
      <Button type="button" classType="primary" title="Join Group" size={2} />
      <style jsx>{`
        .container {
          padding: 1rem 2rem;
        }
      `}</style>
    </div>
  );
};

export default GroupAction;
