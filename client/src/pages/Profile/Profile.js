import React from 'react';
import { useQuery } from 'react-query';
import { useUser } from '../../contexts';
import { useParams } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import Container from '../../components/Container';
import UserAPI from 'api/UserAPI';
import Spinner from 'components/Spinner';
import styles from './Profile.module.css';

const Profile = () => {
  const { id } = useParams();
  const { currentUser } = useUser();

  const { isLoading, data, error } = useQuery(id, () =>
    UserAPI.getUserProfile(id)
  );

  const user = data?.data;

  if (isLoading)
    return (
      <Container>
        <div className={styles.loadingContainer}>
          <Spinner size={50} />
        </div>
      </Container>
    );

  if (error)
    return (
      <p> Unable to fetch user details right now. Please try again later. </p>
    );

  return (
    <Container>
      <ProfileDetails user={user} />
    </Container>
  );
};

export default Profile;
