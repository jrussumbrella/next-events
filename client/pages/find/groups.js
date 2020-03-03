import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import GroupList from '../../components/Groups/GroupList';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGroups } from '../../store/groups/groupsActions';

const Groups = () => {
  const dispatch = useDispatch();
  const { allGroups } = useSelector(state => state.groups);

  return (
    <Layout>
      <div className="container">
        <GroupList groups={allGroups} />
      </div>
      <style jsx>{`
        .container {
          padding: 2rem;
        }
      `}</style>
    </Layout>
  );
};

Groups.getInitialProps = async ctx => {
  const page = 1;
  ctx.store.dispatch(getAllGroups(page));
  return {};
};

export default Groups;
