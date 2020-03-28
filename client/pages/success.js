import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Router, { useRouter } from 'next/router';
import { setUser } from '../store/user/userAction';
import { PageLoader } from '../components/Shared/Loader';
import Layout from '../components/Layout';

const success = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { token } = router.query;

  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        Router.push('/login');
        return;
      }
      try {
        await dispatch(setUser(token));
        Router.push('/');
      } catch (error) {
        Router.push('/login');
      }
    };
    verifyToken();
  }, []);

  return (
    <Layout>
      <PageLoader fixed={false} />
    </Layout>
  );
};

export default success;
