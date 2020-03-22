import React, { useState, useEffect } from 'react';
import Button from '../Shared/Button';
import TabList from '../Shared/Tabs/TabList';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { getUser } from '../../store/user/userAction';
import { formatCreatedAt } from '../../utils/formatDate';
import { setModal } from '../../store/modal/modalAction';
import UserLoader from '../Shared/Loader/UserLoader';
import Modal from '../Shared/Modal';
import EditUserDetails from './EditUserDetails';

const UserDetails = () => {
  const dispatch = useDispatch();
  const { user, selectedUser } = useSelector(state => state.auth);
  const [active, setActive] = useState('Groups');
  const userTabs = ['Groups', 'Events'];
  const router = useRouter();

  const { username } = router.query;

  useEffect(() => {
    dispatch(getUser(username));
  }, [username, user]);

  const handleEditProfile = () => {
    dispatch(setModal(true));
  };

  const handleTabChange = val => {
    console.log(val);
  };

  if (!selectedUser) {
    return <UserLoader />;
  }

  return (
    <div>
      <Modal title={'Edit Profile'}>
        <EditUserDetails />
      </Modal>
      <div className="bg-cover"></div>
      <div className="top">
        <div className="avatar">
          <div className="avatar-text">
            {selectedUser.name.charAt(0).toUpperCase()}
          </div>
        </div>
        {user?._id === username && (
          <div className="top-right">
            <Button
              type="button"
              title="Edit Profile"
              onClick={handleEditProfile}
            />
          </div>
        )}
      </div>
      <div className="user-details">
        <div className="user-info">
          <div className="name">{selectedUser.name}</div>
          <div className="date">
            Joined Date:{' '}
            <span style={{ fontWeight: 600 }}>
              {' '}
              {formatCreatedAt(selectedUser.createdAt)}
            </span>
          </div>
        </div>
      </div>
      <TabList
        tabs={userTabs}
        activeTab={active}
        onTabChange={handleTabChange}
      />
      <style jsx>{`
        .bg-cover {
          background-image: linear-gradient(
            to right top,
            #ee5253,
            #ea435f,
            #e4356b,
            #da2978,
            #cd2385
          );
          width: 100%;
          height: 15rem;
        }

        .top {
          display: flex;
          justify-content: space-between;
        }

        .top-right {
          margin: 2rem 2rem 0 0;
        }

        .user-details {
          padding: 2rem;
        }

        .avatar {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 10rem;
          height: 10rem;
          background-color: var(--color-primary);
          border-radius: 50%;
          margin-top: -5rem;
          margin-left: 2rem;
          border: 2px solid #fff;
        }

        .user-info {
          flex: 1;
        }

        .avatar-text {
          color: #fff;
          font-size: 3rem;
          font-weight: 600;
        }

        .name {
          font-size: 2rem;
        }

        .date {
          padding-top: 1rem;
          font-size: 1.6rem;
        }
      `}</style>
    </div>
  );
};

export default UserDetails;
