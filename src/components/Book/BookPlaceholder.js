import React from 'react';
import './BookPlaceholder.scss';

export default ({ Action }) => (
  <div className="book-placeholder-container">
    <div onClick={Action} role="button" className="book">
      <span className="icon fas fa-plus" />
      <div className="info">
        <h2 className="book-title">Add your own book to the collection</h2>
        <div className="rent-status">
          <h3>You&apos;ll never see it again, hah!</h3>
        </div>
      </div>
    </div>
  </div>
);
