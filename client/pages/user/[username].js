import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { getUserEvents, getUserGroups } from '../../store/user/userAction';
import Layout from '../../components/Layout';
import UserDetails from '../../components/User/UserDetails';
import TabList from '../../components/Shared/Tabs/TabList';
import EventList from '../../components/Shared/Events/EventList';
import GroupList from '../../components/Shared/Groups/GroupList';
import { GridLoader } from '../../components/Shared/Loader';

const User = () => {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector(state => state.auth);
  const [active, setActive] = useState('Groups');
  const userTabs = ['Groups', 'Events'];

  const router = useRouter();
  const { username } = router.query;

  const handleTabChange = val => {
    setActive(val);
  };

  useEffect(() => {
    if (active === 'Groups') {
      dispatch(getUserGroups(username));
    } else {
      dispatch(getUserEvents(username));
    }
  }, [active]);

  return (
    <Layout>
      <UserDetails />

      <TabList
        tabs={userTabs}
        activeTab={active}
        onTabChange={handleTabChange}
      />

      <div className="tab-item">
        {active === 'Groups' ? (
          <>
            {selectedUser?.myGroups ? (
              <GroupList groups={selectedUser.myGroups} />
            ) : (
              <GridLoader />
            )}
          </>
        ) : (
          <>
            {selectedUser?.myEvents ? (
              <EventList events={selectedUser.myEvents} />
            ) : (
              <GridLoader />
            )}
          </>
        )}
      </div>
      <style jsx>{`
        .tab-item {
          padding: 0 2rem;
        }
      `}</style>
    </Layout>
  );
};

export default User;
