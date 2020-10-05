import React from 'react';
import Layout from './components/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './features/Home';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';

const queryCache = new QueryCache();

function App() {
  return (
    <Router>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <Layout>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Layout>
        <ReactQueryDevtools initialIsOpen />
      </ReactQueryCacheProvider>
    </Router>
  );
}

export default App;
