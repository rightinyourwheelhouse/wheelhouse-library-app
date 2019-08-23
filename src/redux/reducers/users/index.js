import * as userActions from '../../actions/users/types';

const initialState = {
  isLoading: false,
  users: [],
};

export default function config(state = initialState, action) {
  switch (action.type) {
    case userActions.FETCH_ALL_USERS_SUCCESS:
      return {
        ...state,
        users: action.users,
      };
    default: return state;
  }
}
