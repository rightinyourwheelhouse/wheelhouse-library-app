import * as messageActions from '../../actions/messages/types';

const initialState = {
  messageQueue: [],
};

export default function config(state = initialState, action) {
  switch (action.type) {
    case messageActions.SHOW_MESSAGE: {
      const { messageQueue } = state;
      const { color, text } = action;
      return {
        ...state,
        messageQueue: [...messageQueue, { color, text }],
      };
    }
    case messageActions.REMOVE_MESSAGE: {
      const { messageQueue } = state;
      const { index } = action;
      const newMessageQueue = [
        ...messageQueue.slice(0, index),
        ...messageQueue.slice(index + 1),
      ];

      return {
        ...state,
        messageQueue: newMessageQueue,
      };
    }
    default: return state;
  }
}
