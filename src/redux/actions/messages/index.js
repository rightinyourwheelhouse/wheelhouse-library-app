import * as messageTypes from './types';

export const removeMessage = index => ({
  type: messageTypes.REMOVE_MESSAGE,
  index,
});

export const removeAll = () => ({
  type: messageTypes.REMOVE_ALL,
});

export const showMessage = (text, color = '#2d2d2d', delay) => ({
  type: messageTypes.SHOW_MESSAGE,
  text,
  color,
  timeout: delay,
});
