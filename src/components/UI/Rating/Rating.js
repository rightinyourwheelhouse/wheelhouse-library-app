import React from 'react';
import './Rating.scss';

export default ({ rating }) => {
  let stars = '';

  for (let i = 1; i < rating; i += 1) {
    stars += '⭐';
  }

  return (
    <span className="rating">
      {stars}
    </span>
  );
};
