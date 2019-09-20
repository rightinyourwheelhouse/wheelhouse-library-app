import React from 'react';
import './Switch.scss';

export default ({
  Id,
  Text,
  On,
  Action,
}) => (
  <label htmlFor={Id} className="switch">
    {Text}
    <div className={`switch-background ${On ? 'on' : ''}`}>
      <input onChange={Action} id={Id} type="checkbox" checked={On} />
      <span className={`slider round ${On ? 'on' : ''}`} />
    </div>
  </label>
);
