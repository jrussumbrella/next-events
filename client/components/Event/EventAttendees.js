import React from 'react';

const EventAttendees = () => {
  return (
    <div>
      <ul className="attendees">
        {[...Array(5)].map(arr => (
          <li className="list" key={arr}>
            <div className="inner">
              <a href="#" className="link">
                <div className="wrapper">
                  <img
                    className="avatar"
                    src="https://secure.meetupstatic.com/photos/member/e/6/c/b/member_243779083.jpeg"
                    alt=""
                  />
                  <div className="info">
                    <div className="name">Alexander</div>
                    <div className="label">Member</div>
                  </div>
                </div>
              </a>
            </div>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .attendees {
          display: flex;
          align-items: center;
          flex: no-wrap;
          padding-left: 2rem;
          overflow-y: auto;
          overflow-x: scroll;
          overflow-y: hidden;
        }
        ::-webkit-scrollbar {
          display: none;
        }

        .attendees .list {
          padding: 15px 15px 15px 0;
        }

        .attendees .link {
          color: var(--color-dark);
        }

        .avatar {
          width: 7rem;
          height: 7rem;
          border-radius: 50%;
        }

        .inner {
          padding-right: 1.5rem;
          box-shadow: 0 0 4px 0 rgba(46, 62, 72, 0.12),
            0 4px 12px 0 rgba(46, 62, 72, 0.12);
          overflow: hidden;
          border-radius: 6px;
        }

        .wrapper {
          padding: 2rem 3rem;
        }

        .wrapper .info {
          font-size: 1.5rem;
          padding: 1rem 0;
        }

        .wrapper .name {
          margin-bottom: 0.5rem;
        }

        .wrapper .label {
          color: var(--color-gray);
        }
      `}</style>
    </div>
  );
};

export default EventAttendees;
