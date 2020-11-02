import React from 'react';
import { Link } from 'react-router-dom';
import AccountIcon from '../../Icons/Account';
import { useUser } from '../../../contexts';
import Avatar from '../../Avatar';

const MobileLinks = () => {
  const { isAuthenticated, currentUser } = useUser();

  return (
    <div>
      <Link to={isAuthenticated ? `/profile/${currentUser._id}` : '/login'}>
        {isAuthenticated ? (
          <Avatar
            letter={currentUser.name.charAt(0)}
            imageUrl={currentUser.imageURL}
          />
        ) : (
          <AccountIcon size={30} />
        )}
      </Link>
    </div>
  );
};

export default MobileLinks;
