import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import GroupList from '../../components/Groups/GroupList';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGroups } from '../../store/groups/groupsActions';

const Groups = () => {
  const dispatch = useDispatch();
  const { allGroups } = useSelector(state => state.groups);
  const page = 1;

  useEffect(() => {
    dispatch(getAllGroups(page));
  }, []);

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

export default Groups;
