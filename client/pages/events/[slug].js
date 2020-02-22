import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { MdDateRange } from 'react-icons/md';
import { FiMapPin } from 'react-icons/fi';
import { EventAttendees, EventAction, EventTags } from '../../components/Event';
import { useDispatch, useSelector } from 'react-redux';
import { getEvent } from '../../store/events/eventsAction';
import Layout from '../../components/Layout';

const Events = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { selected } = useSelector(state => state.events);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvent(slug));
  }, []);

  return (
    <Layout>
      <div>
        {selected && (
          <>
            <ul className="breadcrumb">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">{selected.name}</a>
              </li>
            </ul>
            <div className="top-bar">
              <div
                className="cover-img"
                style={{
                  backgroundImage: `url(${selected.imageURL})`
                }}
              ></div>
            </div>
            <div className="container">
              <div className="info">
                <h1 className="title"> {selected.name}</h1>
                <div className="extra-details">
                  <div className="date">
                    {' '}
                    <MdDateRange
                      color={'var(--color-primary)'}
                      size={20}
                    />{' '}
                    <span>February 22, 2020</span>
                  </div>
                  <div className="place">
                    <FiMapPin color={'var(--color-primary)'} size={20} />
                    <span>{selected.location.formattedAddress}</span>{' '}
                  </div>
                </div>
                <div className="desc">{selected.description}</div>
              </div>
              <EventTags />
              <EventAction />
            </div>
            <div className="heading">
              Attendees ({selected.attendees.length})
            </div>
            <EventAttendees attendees={selected.attendees} />
          </>
        )}
      </div>
      <style jsx>{`
        .breadcrumb {
          padding: 1.5rem 2rem;
          display: flex;
          align-items: center;
        }

        .breadcrumb li {
          padding-right: 2rem;
        }

        .breadcrumb li a {
          color: var(--color-dark);
          font-size: 1.6rem;
        }

        .container {
          padding: 1.5rem 1.5rem 0 1.5rem;
        }

        .info {
          position: relative;
          z-index: 1;
        }

        .heading {
          font-size: 2rem;
          font-weight: 600;
          padding: 1.5rem 2rem;
        }

        .desc {
          font-size: 1.6rem;
          color: #555555;
          line-height: 1.5;
        }

        .info .title {
          font-size: 2.5rem;
          margin-bottom: 0;
        }

        .extra-details {
          font-size: 1.5rem;
          padding: 1rem 0;
        }

        .date {
          padding: 1rem 0;
        }

        .date,
        .place {
          display: flex;
          align-items: center;
        }

        .extra-details span {
          padding: 0 0.5rem;
          flex: 1;
        }

        .top-bar {
          position: relative;
          padding: 12rem 0;
        }
        .cover-img {
          background-size: cover;
          background-position: center;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </Layout>
  );
};

export default Events;
