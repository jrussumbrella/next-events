import React from 'react';
import Link from 'next/link';

const AuthLink = ({ type }) => {
  return (
    <>
      <div className="link">
        <Link href="/forgot-password">
          <a> Forgot Password.</a>
        </Link>
      </div>
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
          padding: 0.5rem 0;
          text-align: center;
        }

        .link a {
          color: var(--color-primary);
        }
      `}</style>
    </>
  );
};

export default AuthLink;
