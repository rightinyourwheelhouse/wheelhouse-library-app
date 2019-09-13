import React from 'react';
import './AddBookButton.scss';

export default ({ Click }) => (
  <div role="button" onClick={Click} className="ghost-book">
    <i className="fas fa-book-medical" /> Add new book
  </div>
);
