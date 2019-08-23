import * as userActions from '../../actions/users/types';

const initialState = {
  isLoading: false,
  users: [],
  activeUser: undefined,
};

export default function config(state = initialState, action) {
  switch (action.type) {
    case userActions.FETCH_ALL_USERS_SUCCESS:
      return {
        ...state,
        users: action.users,
      };
    case userActions.SET_ACTIVE_USER:
      return {
        ...state,
        activeUser: action.user,
      };
    default: return state;
  }
}
