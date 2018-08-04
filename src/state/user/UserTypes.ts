import { IUserState } from '../../interfaces/IUserState';

import { Action } from 'redux';
import { ILoginResponse } from '../../interfaces/responses/ILoginResponse';

export enum UserActionType {
  LOGIN = 'login',
  LOGIN_FAILED = 'login_failed',
  LOGIN_SUCCESS = 'login_success'
};

export enum UserLoginError {
  INVALID_USERNAME_OR_PASSWORD,
  SERVER_ERROR
};

export interface ILoginAction extends Action {
  type: UserActionType.LOGIN,
  payload: {
    username: string;
    password: string;
    rememberMe?: boolean;
  }
}

export interface ILoginSuccessAction extends Action {
  type: UserActionType.LOGIN_SUCCESS,
  payload: ILoginResponse
}

export interface ILoginFailedAction extends Action {
  type: UserActionType.LOGIN_FAILED,
  payload: {
    error: UserLoginError
  }
}

export const DEFAULT_USER_STATE: IUserState = {
  isLoggedIn: false,
  isLoginInProgress: false
};

export type IUserActions = ILoginAction | ILoginSuccessAction | ILoginFailedAction;