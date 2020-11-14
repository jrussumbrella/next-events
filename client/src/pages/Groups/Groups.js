import React from 'react';
import { usePaginatedQuery } from 'react-query';
import GroupAPI from 'api/GroupAPI';
import GroupList from 'components/Groups/GroupList';
import GroupsSkeleton from 'components/Groups/GroupsSkeleton';
import Container from 'components/Container';
import Hero from 'components/Hero';
import styles from './Groups.module.css';
import Button from 'components/Button';

const Groups = () => {
  const [page, setPage] = React.useState(1);

  const fetchGroups = (key, page = 1) => GroupAPI.getGroups(page, 3);

  const { isLoading, resolvedData } = usePaginatedQuery(
    ['groups', page],
    fetchGroups
  );

  const groups = resolvedData?.data.groups;

  console.log(resolvedData);

  const renderGroups = () => {
    if (isLoading) {
      return <GroupsSkeleton numbers={20} />;
    }

    if (groups) {
      return <GroupList groups={groups} />;
    }

    return null;
  };

  const handlePrevious = () => {
    setPage((old) => Math.max(old - 1, 1));
  };

  const handleNext = () => {
    setPage((old) => old + 1);
  };

  return (
    <div>
      <Hero title="Find your favorite groups" />
      <Container className={styles.container}>
        {renderGroups()}
        <div className={styles.buttonContainer}>
          <button onClick={handlePrevious} disabled={page === 1}>
            Previous Page
          </button>
          <span>Page: {page}</span>
          <button onClick={handleNext}>Next Page</button>
        </div>
      </Container>
    </div>
  );
};

export default Groups;
