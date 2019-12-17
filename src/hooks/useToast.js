import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  showMessage as showMessageAction,
  removeAll as removeAllMessages,
} from '../redux/actions/messages';

export const MESSAGE_TYPES = {
  SUCCESS: 'success',
  WARN: 'warn',
  ERROR: 'error',
  INFO: 'info',
};

export default () => {
  const dispatch = useDispatch();

  const colors = {
    success: '#19cd7c',
    warn: '#eb981d',
    error: '#e44c31',
    info: '#104ce7',
  };

  const showMessage = useCallback((text, messageType, delay = 5000) => {
    const color = colors[messageType];

    dispatch(showMessageAction(text, color, delay));
  }, []);

  const clearAllMessages = useCallback(() => {
    dispatch(removeAllMessages());
  }, []);

  return {
    clearAllMessages,
    showMessage,
  };
};
