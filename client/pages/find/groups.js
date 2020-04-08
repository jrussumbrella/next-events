import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import GroupList from '../../components/Groups/GroupList';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGroups } from '../../store/groups/groupsActions';
import { Spinner } from '../../components/Shared/Loader';

const Groups = () => {
  const dispatch = useDispatch();
  const { allGroups } = useSelector((state) => state.groups);
  const { data, hasMore } = allGroups;
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, false);
    return () => window.removeEventListener('scroll', onScroll, false);
  }, [page, allGroups.hasMore]);

  const onScroll = () => {
    // check if user scroll to bottom
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      handleLoadMore();
    }
  };

  const handleLoadMore = async () => {
    if (!hasMore) return;
    setLoading(true);
    setPage(page + 1);
    await dispatch(getAllGroups(page + 1));
    setLoading(false);
  };

  return (
    <Layout>
      <div className="container">
        <GroupList groups={data} />
        {loading && (
          <div className="load-more-container">
            <Spinner size={5} color={`var(--color-primary)`} />
          </div>
        )}
        {!hasMore && <div className="text-end"> You reached the end</div>}
      </div>
      <style jsx>{`
        .container {
          padding: 2rem;
        }

        .text-end {
          font-size: 2rem;
          margin: 3rem 0;
          text-align: center;
        }

        .load-more-container {
          padding: 3rem 0;
        }
      `}</style>
    </Layout>
  );
};

Groups.getInitialProps = async (ctx) => {
  const page = 1;
  const { allGroups } = ctx.store.getState().groups;
  const { data } = allGroups;
  if (data.length === 0) await ctx.store.dispatch(getAllGroups(page));
};

export default Groups;
