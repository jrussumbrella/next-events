import React from 'react';
import Link from 'next/link';

const AuthLink = ({ type }) => {
  return (
    <>
      {type === 'login' ? (
        <div className="link">
          <p>
            Don't have an account?{' '}
            <Link href="/signup">
              <a> Sign up here.</a>
            </Link>
          </p>
        </div>
      ) : (
        <div className="link">
          <p>
            Already have an account?{' '}
            <Link href="/login">
              <a> Login here.</a>
            </Link>
          </p>
        </div>
      )}
      <style jsx>{`
        .link {
          padding: 1rem 0;
        }

        .link a {
          color: var(--color-primary);
        }
      `}</style>
    </>
  );
};

export default AuthLink;
