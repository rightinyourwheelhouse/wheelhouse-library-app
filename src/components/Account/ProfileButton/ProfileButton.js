import React from 'react';
import hashCode, { getColorFromHashCode } from '../../../utils/hash';
import './ProfileButton.scss';

export default ({ account }) => {
  const initials = `${account.firstName[0]}${account.lastName[0]}`;
  const profileHash = hashCode(JSON.stringify(account));
  const color = getColorFromHashCode(profileHash);

  const style = {
    backgroundColor: color,
  };

  return (
    <span style={style} className="profile-bubble">
      {initials}
    </span>
  );
};
