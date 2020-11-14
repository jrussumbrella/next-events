import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import Layout from 'components/Layout';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Event from 'pages/Event';
import Profile from 'pages/Profile';
import Groups from 'pages/Groups';
import Events from 'pages/Events';
import { UserProvider } from 'contexts/user';

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
              <Route path="/events" exact>
                <Events />
              </Route>
              <Route path="/event/:id" exact>
                <Event />
              </Route>
              <Route path="/groups" exact>
                <Groups />
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
