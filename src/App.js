import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/Navigation/PrivateRoute/PrivateRoute';
import MenuBar from './components/Navigation/MenuBar/MenuBar';
import Landing from './components/Views/Landing/Landing';
import Overview from './components/Views/Overview/Overview';
import Login from './components/Views/Login/Login';
import Users from './components/Views/Users/Users';
import './App.scss';

export default () => (
  <div className="app">
    <MenuBar />
    <Switch>
      <Route exact path="/" component={Landing} />
      <PrivateRoute path="/overview" component={Overview} />
      <PrivateRoute path="/users" component={Users} />
      <Route path="/login" component={Login} />
    </Switch>
  </div>
);
