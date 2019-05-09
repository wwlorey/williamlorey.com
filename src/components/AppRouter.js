import React from 'react';
import ErrorPage from './ErrorPage';
import Home from './Home';
import Music from './Music';
import Story from './Story';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/story' component={Story} />
        <Route exact path='/music' component={Music} />
        <Route exact path='/oops' component={ErrorPage} />

        <Redirect to='/oops' />
      </Switch>
    </Router>
  );
}

export default AppRouter;
