import React from 'react';
import Layout from '../components/Layout';
import { LoginForm, AuthLink } from '../components/Auth';

const Login = () => {
  return (
    <Layout>
      <div className="container">
        <div className="page-heading"> Login</div>
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
