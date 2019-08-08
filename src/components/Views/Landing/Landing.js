import React from 'react';
import { Link } from 'react-router-dom';
import LibraryImage from '../../../img/library.jpg';
import './Landing.scss';

export default () => (
  <div className="landing-page">
    <div className="hero">
      <img src={LibraryImage} alt="A nice library" />
      <div className="hero-text">
        <h1>Raccoons Book Sharing</h1>
        <p>
          Who rented what? Who sucks at reading? Who to publicly shame? Get started!
        </p>
      </div>
    </div>

    <div className="lower-section">
      <button type="button">
        <Link to="/overview">View all the books</Link>
      </button>

      <p className="disclaimer">
        Made with
        <span role="img" aria-label="love"> ❤️</span>
        at
        <strong> Wheelhouse Agency</strong>
      </p>
    </div>
  </div>
);
