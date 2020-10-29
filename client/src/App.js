import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import Layout from './components/Layout';
import Home from './views/Home';
import Login from './views/Login';
import Event from './views/Event';
import Profile from './views/Profile';
import { UserProvider } from './contexts/user';

const queryCache = new QueryCache();

function App() {
  return (
    <Router>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <UserProvider>
          <Layout>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/login" exact>
                <Login />
              </Route>
              <Route path="/event/:id" exact>
                <Event />
              </Route>
              <Route path="/profile/:id" exact>
                <Profile />
              </Route>
            </Switch>
          </Layout>
        </UserProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </ReactQueryCacheProvider>
    </Router>
  );
}

export default App;
