import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import {
  GroupInfo,
  GroupAction,
  GroupEvents,
  GroupMembers
} from '../../components/Group';
import TabList from '../../components/Shared/Tabs/TabList';
import { useSelector, useDispatch } from 'react-redux';
import { getGroup } from '../../store/groups/groupsActions';

const Group = ({ group }) => {
  const [activeTab, setActiveTab] = useState('Events');
  const tabs = ['Events', 'Members'];

  const handleTabChange = value => {
    setActiveTab(value);
  };

  return (
    <Layout title={`Next Events - ${group.name}`}>
      {group && (
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
      )}
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
  const { group } = ctx.store.getState().groups;
  return { group };
};

export default Group;
