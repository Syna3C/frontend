import { Reducer } from 'redux';

import { IUserState } from "../../interfaces/IUserState";
import { User } from '../../models/user';
import { DEFAULT_USER_STATE, IUserActions, UserActionType } from './UserTypes';

export const userReducer: Reducer<IUserState> = (state: IUserState = DEFAULT_USER_STATE, action: IUserActions) => {
  switch (action.type) {
    case UserActionType.LOGIN:
      return { ...state, isLoginInProgress: true, loginErrors: [] };
    case UserActionType.LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true, isLoginInProgress: false, user: new User(action.payload.response.user), token: action.payload.response.token, loginErrors: [], rememberMe: action.payload.rememberMe };
    case UserActionType.LOGIN_FAILED:
      return { ...state, isLoggedIn: false, isLoginInProgress: false, user: undefined, loginErrors: action.payload.error };
    case UserActionType.LOGOUT:
      return { ...state, isLoggedIn: false, isLoginInProgress: false, user: undefined, loginErrors: [], token: undefined, rememberMe: false }

    case UserActionType.SIGNUP:
      return { ...state, isSignUpInProgress: true, signUpErrors: [] };
    case UserActionType.SIGNUP_SUCCESS:
      return { ...state, isLoggedIn: true, isSignUpInProgress: false, user: new User(action.payload.user), token: action.payload.token, signUpErrors: [] };
    case UserActionType.SIGNUP_FAILED:
      return { ...state, isLoggedIn: false, isSignUpInProgress: false, user: undefined, signUpErrors: action.payload.error };
    default:
      return state;
  }
}
