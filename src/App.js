import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PrivateRoute from './components/Navigation/PrivateRoute/PrivateRoute';
import Overview from './components/Views/Overview/Overview';
import Login from './components/Views/Login/Login';
import Add from './components/Views/Book/Add';
import BookDetail from './components/Views/Book/Detail';
import Scan from './components/Views/Scan/Scan';
import Toast from './components/UI/Toast/Toast';
import Styles from './styles/global';
import * as userActionFile from './redux/actions/users';
import useCookie from './hooks/useCookie';

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActionFile, dispatch),
});

const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps, mapDispatchToProps)(({
  userActions,
  userReducer: {
    activeUser,
  },
}) => {
  const [userObject] = useCookie('user');

  // Always fetch all users to be able to work with them in rentals
  useEffect(() => {
    userActions.fetchAllUsers();
  }, [userActions]);

  useEffect(() => {
    if (!activeUser && userObject) {
      const { user, accessToken } = JSON.parse(userObject);
      userActions.setActiveUser(user, accessToken);
    }
  }, [activeUser, userActions, userObject]);

  return (
    <div className="app">
      <Styles />
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path={['/', '/overview']} exact component={Overview} />
        <PrivateRoute path="/books/add" component={Add} />
        <PrivateRoute path="/book/:id" component={BookDetail} />
        <PrivateRoute path="/scan" component={Scan} />
      </Switch>
      <Toast />
    </div>
  );
});
