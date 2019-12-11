import * as messageTypes from './types';

const colors = {
  success: '#19cd7c',
  warn: '#eb981d',
  error: '#e44c31',
  info: '#104ce7',
};

export const removeMessage = index => ({
  type: messageTypes.REMOVE_MESSAGE,
  index,
});

export const showMessage = text => ({
  type: messageTypes.SHOW_MESSAGE,
  text,
});

export const showSuccessMessage = text => ({
  type: messageTypes.SHOW_MESSAGE,
  text,
  color: colors.success,
});

export const showInfoMessage = text => ({
  type: messageTypes.SHOW_MESSAGE,
  text,
  color: colors.info,
});

export const showWarningMessage = text => ({
  type: messageTypes.SHOW_MESSAGE,
  text,
  color: colors.warn,
});

export const showErrorMessage = text => ({
  type: messageTypes.SHOW_MESSAGE,
  text,
  color: colors.error,
});
