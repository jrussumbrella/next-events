import React from 'react';
import Layout from '../components/Layout';
import { RegisterForm, AuthLink } from '../components/Auth';

const SignUp = () => {
  return (
    <Layout>
      <div className="container">
        <div className="page-heading"> Sign Up</div>
        <RegisterForm />
        <AuthLink type="register" />
      </div>
      <style jsx>{`
        .container {
          padding: 3rem 2rem;
        }
        .page-heading {
          font-size: 3rem;
        }
      `}</style>
    </Layout>
  );
};

export default SignUp;
