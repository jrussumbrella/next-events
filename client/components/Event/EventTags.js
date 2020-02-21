import React from 'react';

const EventTags = () => {
  return (
    <div>
      <div className="tags">
        <div className="tag-list"> Party </div>
        <div className="tag-list"> Life </div>
      </div>
      <style jsx>{`
        .tags {
          display: flex;
          align-items: center;
          padding: 2rem 0 1rem 0;
        }

        .tag-list {
          margin-right: 1rem;
          padding: 1rem 2rem;
          border: 1px solid var(--color-primary);
          color: var(--color-primary);
          font-size: 1.4rem;
          border-radius: 50px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default EventTags;
