
import { AuthActions, AuthState } from './types';

const initialState = {
  isAuthenticated: false,
  access_token: '',
};

const authReducer = (
  state: AuthState = initialState,
  action: any,
): AuthState => {
  switch (action.type) {
    case AuthActions.UPDATE_AUTH: {
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    }
    case AuthActions.UPDATE_ACCESS_TOKEN: {
      return {
        ...state,
        access_token: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
