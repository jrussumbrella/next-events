import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import Layout from './components/Layout';
import Home from './features/Home';
import Login from './features/Login';
import Event from './features/Event';

const queryCache = new QueryCache();

function App() {
  return (
    <Router>
      <ReactQueryCacheProvider queryCache={queryCache}>
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
          </Switch>
        </Layout>
        <ReactQueryDevtools initialIsOpen={false} />
      </ReactQueryCacheProvider>
    </Router>
  );
}

export default App;
