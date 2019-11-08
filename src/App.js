import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LandingPage from './pages/Landing/LandingPage';
import PrivateRoute from './components/Navigation/PrivateRoute/PrivateRoute';
import Overview from './components/Views/Overview/Overview';
import Login from './components/Views/Login/Login';
import Users from './components/Views/Users/Users';
import Add from './components/Views/Book/Add';
import BookDetail from './components/Views/Book/Detail';
// import './App.scss';
import Styles from './styles/global';
import * as userActionFile from './redux/actions/users';

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActionFile, dispatch),
});

export default connect(null, mapDispatchToProps)(({ userActions }) => {
  useEffect(() => {
    userActions.fetchAllUsers();
  });

  return (
    <div className="app">
      <Styles />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <PrivateRoute path="/overview" component={Overview} />
        <PrivateRoute path="/users" component={Users} />
        <PrivateRoute path="/books/add" component={Add} />
        <PrivateRoute path="/book/:id" component={BookDetail} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
});
