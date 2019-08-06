import React from 'react';
import ProfileButton from '../../Account/ProfileButton/ProfileButton';
import './MenuBar.scss';

export default ({ text }) => {
  const account = {
    id: 0,
    firstName: 'Rafaël',
    lastName: 'Mindreau',
  };

  return (
    <nav className="menu-bar">
      <h1 className="title">{text}</h1>
      <ProfileButton account={account} />
    </nav>
  );
};
