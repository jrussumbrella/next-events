import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import store from '../store';
import { parseCookies, destroyCookie } from 'nookies';
import { setUser } from '../store/user/userAction';
import { redirectUser } from '../utils/auth';
import Toast from '../components/Shared/Notif/Toast';
import '../public/css/normalize.css';

const MyApp = ({ Component, pageProps, store }) => {
  return (
    <Provider store={store}>
      <Toast />
      <Component {...pageProps} />
    </Provider>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  const isServer = ctx.req;
  if (isServer) {
    try {
      const { token } = parseCookies(ctx);
      if (token) {
        await ctx.store.dispatch(setUser(token));
      }
    } catch (error) {
      destroyCookie('token');
    }
  }

  return { pageProps };
};

export default withRedux(store)(MyApp);
