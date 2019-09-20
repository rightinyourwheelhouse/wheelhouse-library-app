import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/Navigation/PrivateRoute/PrivateRoute';
import Landing from './components/Views/Landing/Landing';
import Overview from './components/Views/Overview/Overview';
import Login from './components/Views/Login/Login';
import Users from './components/Views/Users/Users';
import Add from './components/Views/Book/Add';
import './App.scss';

export default () => (
  <div className="app">
    <Switch>
      <Route exact path="/" component={Landing} />
      <PrivateRoute path="/overview" component={Overview} />
      <PrivateRoute path="/users" component={Users} />
      <PrivateRoute path="/books/add" component={Add} />
      <Route path="/login" component={Login} />
    </Switch>
  </div>
);
