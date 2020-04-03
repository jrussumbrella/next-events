import React, { useState } from 'react';
import Layout from '../components/Layout';
import { useDispatch } from 'react-redux';
import { resetPassword } from '../store/user/userAction';
import { useRouter } from 'next/router';
import Button from '../components/Shared/Button';

const ResetPassword = () => {
  const router = useRouter();
  const [inputFields, setInputFields] = useState({
    password: '',
    passwordConfirm: ''
  });
  const [loading, setLoading] = useState(false);

  const { token } = router.query;

  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    await dispatch(resetPassword(token, inputFields));
    setLoading(false);
  };

  const handleChange = e => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <div className="container">
        <h2 className="page-heading"> Forgot Password </h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="group">
            <input
              type="password"
              name="password"
              placeholder="New Password"
              onChange={handleChange}
            />
          </div>
          <div className="group">
            <input
              type="password"
              name="passwordConfirm"
              placeholder="Confirm New Password"
              onChange={handleChange}
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

export default ResetPassword;
