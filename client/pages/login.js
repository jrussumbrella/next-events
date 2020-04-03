import React from 'react';
import Layout from '../components/Layout';
import { LoginForm, AuthLink } from '../components/Auth';

const Login = () => {
  return (
    <Layout>
      <div className="container">
        <h2 className="page-heading"> Login</h2>
        <LoginForm />
        <AuthLink type="login" />
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

export default Login;
