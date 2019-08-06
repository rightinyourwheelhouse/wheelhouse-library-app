import React from 'react';
import './ProgressBar.scss';

export default ({ color, percentage }) => {
  const progressBarStyle = {
    width: `${percentage}%`,
    backgroundColor: color,
  };

  return (
    <div className="progress-bar">
      <span className="bar" style={progressBarStyle} />
    </div>
  );
};
