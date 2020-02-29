import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import {
  GroupInfo,
  GroupAction,
  GroupEvents,
  GroupMembers
} from '../../components/Group';
import TabList from '../../components/Shared/Tabs/TabList';
import { useSelector, useDispatch } from 'react-redux';
import { getGroup } from '../../store/groups/groupsActions';

const Group = () => {
  const [activeTab, setActiveTab] = useState('Events');
  const router = useRouter();
  const { slug } = router.query;
  const name = slug.split('-').join(' ');
  const tabs = ['Events', 'Members'];
  const dispatch = useDispatch();
  const { group } = useSelector(state => state.groups);

  useEffect(() => {
    dispatch(getGroup(slug));
  }, []);

  const handleTabChange = value => {
    setActiveTab(value);
  };

  return (
    <Layout title={`Next Events - ${name}`}>
      {group && (
        <div>
          <GroupInfo group={group} />
          <GroupAction />
          <TabList
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />
          {activeTab === 'Events' ? <GroupEvents /> : <GroupMembers />}
        </div>
      )}
    </Layout>
  );
};

export default Group;
