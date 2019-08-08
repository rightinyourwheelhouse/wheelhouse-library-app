import React from 'react';
import ProfileBubble from '../../Account/ProfileBubble/ProfileBubble';
import './MenuBar.scss';

export default ({ text }) => {
  const account = {
    id: 0,
    username: 'Rafaël Mindreau',
  };

  return (
    <nav className="menu-bar">
      <h1 className="title">{text}</h1>
      <ProfileBubble account={account} />
    </nav>
  );
};
