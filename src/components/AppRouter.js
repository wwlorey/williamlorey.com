import React from 'react';
import ErrorPage from './ErrorPage';
import Home from './Home';
import Story from './Story';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/story' component={Story} />
        <Route exact path='/error' component={ErrorPage} />

        <Redirect to='/error' />
      </Switch>
    </Router>
  );
}

export default AppRouter;
