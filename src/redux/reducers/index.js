import * as actions from '../actions';

export default function config(state, action) {
  switch (action.type) {
    case actions.FETCH_ALL_USERS_SUCCESS:
      return {
        ...state,
      };
    default: return state;
  }
}
