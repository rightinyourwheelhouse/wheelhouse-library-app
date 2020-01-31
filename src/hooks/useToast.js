import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  showMessage as showMessageAction,
  removeAll as removeAllMessages,
} from '../redux/actions/messages';

export const MESSAGE_TYPES = {
  ERROR: 'error',
  INFO: 'info',
  SUCCESS: 'success',
  WARN: 'warn',
};

export default () => {
  const dispatch = useDispatch();

  const colors = {
    error: '#e44c31',
    info: '#104ce7',
    success: '#19cd7c',
    warn: '#eb981d',
  };

  const showMessage = useCallback((text, messageType, delay = 5000) => {
    const color = colors[messageType];

    dispatch(showMessageAction(text, color, delay));
  }, [colors, dispatch]);

  const clearAllMessages = useCallback(() => {
    dispatch(removeAllMessages());
  }, [dispatch]);

  return {
    clearAllMessages,
    showMessage,
  };
};
