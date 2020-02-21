import React from 'react';
import { useRouter } from 'next/router';
import { MdDateRange } from 'react-icons/md';
import { FiMapPin } from 'react-icons/fi';
import Layout from '../../components/Layout';
import EventAttendees from '../../components/Event/EventAttendees';
import EventAction from '../../components/Event/EventAction';
import EventTags from '../../components/Event/EventTags';

const Events = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <Layout>
      <div>
        <ul className="breadcrumb">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">CA After Party</a>
          </li>
        </ul>
        <div className="top-bar">
          <div
            className="cover-img"
            style={{
              backgroundImage: `url(https://demo.gloriathemes.com/eventchamp/demo/wp-content/themes/eventchamp/include/assets/img/breadcrumbs-bg.jpg)`
            }}
          ></div>
        </div>
        <div className="container">
          <div className="info">
            <h1 className="title"> CA After Party </h1>
            <div className="extra-details">
              <div className="date">
                {' '}
                <MdDateRange color={'var(--color-primary)'} size={20} />{' '}
                <span>February 22, 2020</span>
              </div>
              <div className="place">
                <FiMapPin color={'var(--color-primary)'} size={20} />
                <span>119 L.P. Leviste Street</span>{' '}
              </div>
            </div>
            <div className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
              perspiciatis omnis libero temporibus expedita minus voluptas!
              Labore molestiae atque, alias, ut, officiis rerum omnis autem
              doloremque fuga inventore voluptatem tempore.
            </div>
          </div>

          <EventTags />
          <EventAction />
          <div className="heading">Attendees (8)</div>
        </div>
        <EventAttendees />
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
          padding: 1.5rem;
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
