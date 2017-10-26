import React from 'react';
// import Component from './components/common/ShallowCompareComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import Root from './components/Root';
import NotFound from './components/common/NotFound';
import Page from './components/Page';

// import 'normalize.css';
import './app.scss';

export default () => (
  <Router>
    <Switch component={Root}>
      <Route path="/page" component={Page} />
      <Redirect from="/" to="page" />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
