import * as userActions from '../../actions/users/types';
import { updateAuthenticationHeader } from '../../../utils/api';

const initialState = {
  isLoading: false,
  users: [],
  activeUser: undefined,
  accessToken: undefined,
};

export default function config(state = initialState, action) {
  switch (action.type) {
    case userActions.FETCH_ALL_USERS_SUCCESS:
      return {
        ...state,
        users: action.users,
      };
    case userActions.SET_ACTIVE_USER: {
      if (action.user) {
        const userObject = {
          avatar: action.user.avatar,
          id: action.user.id,
          token: action.token,
          username: action.user.username,
        };

        localStorage.setItem('active-user', JSON.stringify(userObject));
        updateAuthenticationHeader(action.token);

        return {
          ...state,
          activeUser: userObject,
        };
      }
      return {
        ...state,
      };
    }
    default: return state;
  }
}
