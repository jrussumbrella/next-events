import React from 'react';
import { useUser } from '../../contexts';
import ProfileDetails from './ProfileDetails';
import Container from '../../components/Container';

const Profile = () => {
  const { currentUser } = useUser();

  if (!currentUser) return null;

  return (
    <Container>
      <h1> My Profile </h1>
      <ProfileDetails />
    </Container>
  );
};

export default Profile;
