import React from 'react';
import Book from './components/Book/Book';
import MenuBar from './components/Navigation/MenuBar/MenuBar';
import bookCollection from './constants/books';
import './App.scss';

export default () => {
  // Render entire collection of books as a list of book components
  const books = bookCollection.map(book => (
    <Book key={book.id} bookData={book} />
  ));

  const title = 'Overview';

  return (
    <div className="app">
      <MenuBar text={title} />
      {books}
    </div>
  );
};
