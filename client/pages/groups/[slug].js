import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import {
  GroupInfo,
  GroupAction,
  GroupEvents,
  GroupMembers
} from '../../components/Group';
import TabList from '../../components/Shared/Tabs/TabList';
import { useSelector } from 'react-redux';
import { getGroup } from '../../store/groups/groupsActions';

const Group = () => {
  const [activeTab, setActiveTab] = useState('Events');
  const tabs = ['Events', 'Members'];

  const { group } = useSelector(state => state.groups);

  const handleTabChange = value => {
    setActiveTab(value);
  };

  if (!group) {
    return <div> Something went wrong</div>;
  }

  return (
    <Layout title={`Next Events - ${group.name}`}>
      <div>
        <GroupInfo group={group} />
        <GroupAction />
        <TabList
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
        <div className="container">
          {activeTab === 'Events' ? <GroupEvents /> : <GroupMembers />}
        </div>
      </div>
      <style jsx>{`
        .container {
          padding: 0 2rem;
        }
      `}</style>
    </Layout>
  );
};

Group.getInitialProps = async ctx => {
  const { slug } = ctx.query;
  await ctx.store.dispatch(getGroup(slug));
  return {};
};

export default Group;
