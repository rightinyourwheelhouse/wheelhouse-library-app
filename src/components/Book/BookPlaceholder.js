import React from 'react';
import './BookPlaceholder.scss';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default ({ Action }) => (
  <div className="book-placeholder-container">
    <div onClick={Action} role="button" className="book">
      <FontAwesomeIcon icon={faPlus} className="icon" />
      <div className="info">
        <h2 className="book-title">Add your own book to the collection</h2>
        <div className="rent-status">
          <h3>You&apos;ll never see it again, hah!</h3>
        </div>
      </div>
    </div>
  </div>
);
