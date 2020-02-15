import React from 'react';
import Layout from '../components/Layout';

const Login = () => {
  return (
    <Layout>
      <div className="container">Login here</div>
      <style jsx>{`
        .container {
          margin: 3rem 2rem;
        }
      `}</style>
    </Layout>
  );
};

export default Login;
