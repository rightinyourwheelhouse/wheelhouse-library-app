import React from 'react';
import ProfileListItem from '../../Account/ProfileListItem/ProfileListItem';
import './Users.scss';

export default () => {
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
