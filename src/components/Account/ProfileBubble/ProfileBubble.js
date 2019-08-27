import React from 'react';
import hashCode, { getColorFromHashCode } from '../../../utils/hash';
import './ProfileBubble.scss';

export default ({ account, big, small }) => {
  let initials = '?';
  let color = '#70b6dd';

  if (account) {
    initials = `${account.username[0]}`;
    const profileHash = hashCode(JSON.stringify(account));
    color = getColorFromHashCode(profileHash);
  }


  const style = {
    backgroundColor: color,
    backgroundImage: account && account.avatar ? `url(${account.avatar})` : '',
  };

  return (
    <span style={style} className={`profile-bubble ${big ? 'big' : ''} ${small ? 'small' : ''}`}>
      {account && account.avatar ? null : initials}
    </span>
  );
};
