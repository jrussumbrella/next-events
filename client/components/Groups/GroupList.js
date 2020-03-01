import React from 'react';
import Link from 'next/link';

const GroupList = ({ groups }) => {
  return (
    <>
      <div>
        {groups.length > 0 ? (
          groups.map(group => (
            <div key={group._id} className="groups">
              <Link href="/groups/[slug]" as={`/groups/${group.slug}`}>
                <a className="link">
                  <div className="inner">
                    <div
                      className="imgCover"
                      style={{ backgroundImage: `url(${group.imageURL})` }}
                    ></div>
                    <div className="overlay"></div>
                    <div className="info">
                      <div className="name">{group.name}</div>
                      <div className="member">{group.countMembers} Members</div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          ))
        ) : (
          <div> No groups yet. </div>
        )}
        <style jsx>{`
          .imgCover {
            width: 100%;
            height: 100%;
            background-size: cover;
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
          }

          .link {
            color: #fff;
          }

          .overlay {
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.4);
            z-index: 1;
          }

          .groups {
            margin-top: 1.5rem;
          }

          .inner {
            position: relative;
            padding-bottom: 56%;
            border-radius: 10px;
            overflow: hidden;
          }

          .info {
            position: absolute;
            bottom: 0;
            z-index: 2;
            padding: 2rem;
          }

          .name {
            font-size: 2.4rem;
          }

          .member {
            font-size: 1.4rem;
          }
        `}</style>
      </div>
    </>
  );
};

export default GroupList;
