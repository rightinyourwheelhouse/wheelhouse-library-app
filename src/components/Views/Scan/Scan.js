import React, { useState } from 'react';
import styled from 'styled-components';
import QrReader from 'react-qr-reader';
// import * as colors from 'styles/colors';
import MenuBar from '../../Navigation/MenuBar/MenuBar';
import useRental from '../../../api/rentals/useRental';

export default ({
  history,
}) => {
  const [snapped, setSnapped] = useState(false);
  const { rentOrReturnBook } = useRental();

  const handleScan = async (data) => {
    if (data && !snapped) {
      setSnapped(true);
      const result = await rentOrReturnBook(data);
      console.log('%cSCAN', 'background-color: #f2e537; padding: 5px; border-radius: 3px; font-weight: bold; color: #403a07', result);
      history.push(`/book/${result.id}`);
    }
  };

  const ScannerCanvas = styled.div`
    border-radius: 20px;
    overflow: hidden;
    border: 5px solid #32435e;
  `;

  return (
    <>
      <MenuBar Title="Book Detail" history={history} />

      <div className="card book-detail">
        <h2 className="book-title">Rent book by QR code</h2>

        <ScannerCanvas>
          <QrReader
            delay={300}
            onScan={handleScan}
            onError
            style={{ width: '100%' }} />
        </ScannerCanvas>
      </div>
    </>
  );
};
