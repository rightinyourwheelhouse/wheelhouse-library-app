import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import QrReader from 'react-qr-reader';
// import * as colors from 'styles/colors';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MenuBar from '../../Navigation/MenuBar/MenuBar';
import useRental from '../../../api/rentals/useRental';
import * as bookActionFile from '../../../redux/actions/books';
import useToast, { MESSAGE_TYPES } from '../../../hooks/useToast';


const mapDispatchToProps = dispatch => ({
  bookActions: bindActionCreators(bookActionFile, dispatch),
});

const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps, mapDispatchToProps)(({
  history,
  bookReducer,
  bookActions,
}) => {
  useEffect(() => {
    bookActions.fetchAllBooks();
  }, [bookActions]);

  const { showMessage } = useToast();
  const [snapped, setSnapped] = useState(false);
  const { rentOrReturnBook } = useRental();

  async function handleScan(bookId) {
    if (bookId && !snapped) {
      setSnapped(true);
      const book = bookReducer.books.find(book => book.id === bookId);
      if (book) {
        console.log('%cSCAN', 'background-color: #f2e537; padding: 5px; border-radius: 3px; font-weight: bold; color: #403a07', book);
        const result = await rentOrReturnBook(book);
        history.push(`/book/${result.id}`);
      } else {
        showMessage('Unkown book!', MESSAGE_TYPES.ERROR);
      }
    }
  }

  async function handleError(err) {
    showMessage(err, MESSAGE_TYPES.ERROR);
  }

  const ScannerCanvas = styled.div`
    border-radius: 20px;
    overflow: hidden;
    border: 5px solid #32435e;
  `;

  return (
    <>
      <MenuBar Title="Scan Book" history={history} Back />

      <div className="card book-detail">
        <h2 className="book-title">Rent book by QR code</h2>

        <ScannerCanvas>
          <QrReader
            delay={300}
            onScan={handleScan}
            onError={handleError}
            style={{ width: '100%' }} />
        </ScannerCanvas>
      </div>
    </>
  );
});
