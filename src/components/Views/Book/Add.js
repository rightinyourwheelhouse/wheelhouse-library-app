import React from 'react';
import './Add.scss';

export default () => (
  <div className="card">
    <h2>Add Book</h2>
    <form>
      <div className="form-group">
        <label htmlFor="isbn">ISBN
          <input id="isbn" type="text" placeholder="978-3-16-148410-0" />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="barcode">Barcode (optional)
          <input id="barcode" type="text" />
        </label>
      </div>
    </form>
  </div>
);
