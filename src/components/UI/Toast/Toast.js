import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { removeMessage } from '../../../redux/actions/messages';
import constants from '../../../styles/colors.js';

export default () => {
  const messages = useSelector(({
    messageReducer: {
      messageQueue,
    },
  }) => messageQueue);
  const dispatch = useDispatch();

  const ToastContainer = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100vw;
    z-index: 1;
  `;

  const ToastMessage = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    margin: 10px;
    width: calc(100vw - 20px);
    box-sizing: border-box;
    background-color: ${({ color }) => color};
    color: white;
    border-radius: 5px;

    box-shadow: ${({ shadow }) => shadow};

    font-size: 18px;
    line-height: 28px;
    font-weight: bold;
  `;

  return (
    <ToastContainer>
      {
        messages.map(({ color, text }, index) => (
          <ToastMessage color={color} shadow={constants.materialShadowMid}>
            {text}
            <FontAwesomeIcon onClick={() => dispatch(removeMessage(index))} role="button" icon={faTimes} />
          </ToastMessage>
        ))
      }
    </ToastContainer>
  );
};
