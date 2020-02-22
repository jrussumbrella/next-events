import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

const EventGroup = () => {
  const { selected } = useSelector(state => state.events);
  const { group } = selected;

  return (
    <div>
      <Link href={`/groups/${group._id}`}>
        <a className="link">
          <div className="group">
            <img
              className="img"
              src={`https://secure.meetupstatic.com/photos/event/d/c/e/3/highres_465236547.jpeg`}
              alt=""
            />
            <div className="info">
              <p className="title">{group.name}</p>
              <div className="mode">Public Group</div>
            </div>
          </div>
        </a>
      </Link>
      <style jsx>{`
        .link {
          color: var(--color-dark);
        }
        .group {
          display: flex;
          align-items: center;
          padding: 1rem 2rem;
        }

        .img {
          width: 6rem;
          height: 6rem;
          border-radius: 50%;
        }

        .info {
          padding-left: 1rem;
          flex: 1;
          font-size: 1.7rem;
        }

        .title {
          margin: 0.5rem 0;
        }

        .mode {
          color: var(--color-gray);
        }
      `}</style>
    </div>
  );
};

export default EventGroup;
