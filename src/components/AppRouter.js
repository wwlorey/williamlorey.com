import React from 'react';
import ErrorPage from './ErrorPage';
import Experience from './Experience';
import Home from './Home';
import Music from './Music';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/experience' component={Experience} />
        <Route exact path='/music' component={Music} />
        <Route exact path='/oops' component={ErrorPage} />

        <Redirect to='/oops' />
      </Switch>
    </Router>
  );
}

export default AppRouter;
