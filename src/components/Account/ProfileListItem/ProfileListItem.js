import React from 'react';
import ProfileBubble from '../ProfileBubble/ProfileBubble';
import './ProfileListItem.scss';

export default ({ account }) => (
  <div className="profile-list-item">
    <ProfileBubble big account={account} />
    <h2>{account.username}</h2>
  </div>
);
