import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MenuBar from '../../Navigation/MenuBar/MenuBar';
import Switch from '../../UI/Switch/Switch';
import * as bookActionFile from '../../../redux/actions/books';
import './Add.scss';

const mapDispatchToProps = dispatch => ({
  bookActions: bindActionCreators(bookActionFile, dispatch),
});

const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps, mapDispatchToProps)(({
  userReducer: {
    activeUser,
  },
  bookActions,
  history,
}) => {
  const [isOwner, setIsOwner] = useState(true);
  const [ISBN, setISBN] = useState('');

  useEffect(() => {
    if (!activeUser) {
      history.push('/users');
    }
  });

  const handleSubmit = () => {
    bookActions.addBook(ISBN, activeUser, isOwner).then(() => {
      history.push('/overview');
    });
  };

  return (
    <>
      <MenuBar Title="Add New Book" />
      <div className="card add-new-book">
        <form>
          <div className="form-group">
            <label htmlFor="isbn">ISBN
              <input value={ISBN} onChange={e => setISBN(e.target.value)} id="isbn" type="text" placeholder="978-3-16-148410-0" />
            </label>
          </div>
          <div className="form-group">
            <Switch Action={() => setIsOwner(!isOwner)} Id="owner" Text="Are you the owner? When this option is checked, you will be marked as the owner of this book!" On={isOwner} />
          </div>
        </form>
        <button onClick={handleSubmit} type="button" className="primary">Add new book</button>
      </div>
    </>
  );
});
