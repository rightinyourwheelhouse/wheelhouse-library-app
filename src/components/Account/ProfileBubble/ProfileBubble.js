import React from 'react';
import hashCode, { getColorFromHashCode } from '../../../utils/hash';
import './ProfileBubble.scss';

export default ({ account, big }) => {
  const initials = `${account.username[0]}`;
  const profileHash = hashCode(JSON.stringify(account));
  const color = getColorFromHashCode(profileHash);

  const style = {
    backgroundColor: color,
  };

  return (
    <span style={style} className={`profile-bubble ${big ? 'big' : ''}`}>
      {initials}
    </span>
  );
};
