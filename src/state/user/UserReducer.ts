import { Reducer } from 'redux';

import { IUserState } from "../../interfaces/IUserState";
import { User } from '../../models/user';
import { DEFAULT_USER_STATE, IUserActions, UserActionType } from './UserTypes';

export const userReducer: Reducer<IUserState> = (state: IUserState = DEFAULT_USER_STATE, action: IUserActions) => {
  switch (action.type) {
    case UserActionType.LOGIN:
      return { ...state, isLoginInProgress: true };
    case UserActionType.LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true, isLoginInProgress: false, user: new User(action.payload), loginError: undefined };
    case UserActionType.LOGIN_FAILED:
      return { ...state, isLoggedIn: false, isLoginInProgress: false, user: undefined, loginError: action.payload.error };
    default:
      return state;
  }
}
