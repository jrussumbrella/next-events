import React, { useState } from 'react';
import Layout from '../components/Layout';
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../store/user/userAction';
import Button from '../components/Shared/Button';

const ForgotPassword = () => {
  const [emailText, setEmailText] = useState({ email: '' });
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    await dispatch(forgotPassword(emailText));
    setLoading(false);
  };

  return (
    <Layout>
      <div className="container">
        <h2 className="page-heading"> Forgot Password </h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="group">
            <input
              type="text"
              placeholder="Your Email"
              onChange={e => setEmailText({ email: e.target.value })}
            />
          </div>
          <div className="group">
            <Button
              title="Submit"
              type="submit"
              classType="primary"
              loading={loading}
            />
          </div>
        </form>
      </div>
      <style jsx>
        {`
          .container {
            padding: 2rem;
          }

          .page-heading {
            font-size: 3rem;
          }

          .form input {
            width: 100%;
            border: 1px solid var(--color-light-gray);
            height: 6rem;
            border-radius: 6px;
            padding: 0 1.5rem;
            font-size: 1.6rem;
            background-color: var(--color-light-gray);
          }

          .group {
            margin-top: 2rem;
          }

          .error {
            color: red;
            font-size: 1.5rem;
            padding-top: 1rem;
            display: block;
          }
        `}
      </style>
    </Layout>
  );
};

export default ForgotPassword;
