import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.scss';

export default () => (
  <div className="landing-page">
    <div className="hero">
      <div className="hero-text">
        <h1>Wheelhouse Library</h1>
        <p>
          Who rented what? Who sucks at reading? Who to publicly shame? Get started!
        </p>

        <button type="button" className="primary">
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
  </div>
);
