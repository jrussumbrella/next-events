import React from 'react';
import Button from '../Shared/Button';
import { useDispatch, useSelector } from 'react-redux';
import { joinGroup, leaveGroup } from '../../store/user/userAction';
import { removeMember, addMember } from '../../store/groups/groupsActions';

const GroupAction = () => {
  const { groups, auth } = useSelector(state => state);
  const { user, token } = auth;
  const { group } = groups;
  const dispatch = useDispatch();

  const handleAction = async type => {
    if (!user) {
      alert('Please login');
      return;
    }

    if (type === 'join') {
      await dispatch(joinGroup(group._id, token));
      dispatch(addMember());
    } else {
      dispatch(leaveGroup(group._id, token));
      dispatch(removeMember());
    }
  };

  return (
    <div className="container">
      {user.groups.find(groupId => group._id === groupId) ? (
        <Button
          type="button"
          classType="primary"
          onClick={() => handleAction('leave')}
          title="Leave Group"
          size={2}
        />
      ) : (
        <Button
          type="button"
          classType="primary"
          onClick={() => handleAction('join')}
          title="Join Group"
          size={2}
        />
      )}

      <style jsx>{`
        .container {
          padding: 1rem 2rem;
        }
      `}</style>
    </div>
  );
};

export default GroupAction;
