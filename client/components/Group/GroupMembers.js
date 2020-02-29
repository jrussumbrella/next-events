import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGroupMembers } from '../../store/groups/groupsActions';
import { formatCreatedAt } from '../../utils/formatDate';

const GroupMembers = () => {
  const dispatch = useDispatch();
  const { groupMembers, group } = useSelector(state => state.groups);

  useEffect(() => {
    groupMembers.length === 0 && dispatch(getGroupMembers(group.id));
  }, []);

  return (
    <>
      {groupMembers.length > 0 ? (
        <ul className="member-list">
          {groupMembers.map(member => (
            <li key={member._id}>
              <div>
                <img
                  className="avatar"
                  src={`https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png`}
                  alt={member.user.name}
                />
              </div>
              <div className="info">
                <div className="name">{member.user.name}</div>
                <div className="date">
                  Joined on {formatCreatedAt(member.createdAt)}
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="msg">No Member yet.</div>
      )}

      <style jsx>{`
        .member-list li {
          display: flex;
          padding: 1rem 0;
          border-bottom: 1px solid var(--color-light-gray);
        }

        .avatar {
          width: 6rem;
          height: 6rem;
          border-radius: 50%;
        }

        .info {
          flex: 1;
          padding: 0 1.5rem;
          font-size: 1.7rem;
        }

        .date {
          color: var(--color-gray);
          padding-top: 0.5rem;
        }
      `}</style>
    </>
  );
};

export default GroupMembers;
