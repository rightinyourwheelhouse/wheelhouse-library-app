import React from 'react';
import ProfileListItem from '../../Account/ProfileListItem/ProfileListItem';
import * as actions from '../../../redux/actions';
import './Users.scss';

export default () => {
  actions.fetchAllUsers();
  const users = [{
    username: 'Roel',
  }, {
    username: 'Senne',
  }, {
    username: 'Olivier',
  }, {
    username: 'Rafaël',
  }].map(user => (
    <ProfileListItem account={user} />
  ));

  return (
    <div className="user-list">
      {users}
    </div>
  );
};
