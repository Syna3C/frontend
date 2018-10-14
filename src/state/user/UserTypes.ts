import { IUserState } from '../../interfaces/IUserState';

import { IAction } from '../../interfaces/IAction';
import { IAuthResponse } from '../../interfaces/responses/IAuthResponse';

export enum UserActionType {
  LOGIN = 'login',
  LOGIN_FAILED = 'login_failed',
  LOGIN_SUCCESS = 'login_success',
  LOGOUT = 'logout',
  SIGNUP = 'signup',
  SIGNUP_FAILED = 'signup_failed',
  SIGNUP_SUCCESS = 'signup_success'
};

export enum UserLoginError {
  EMAIL_MISSING,
  INVALID_EMAIL,
  PASSWORD_MISSING,
  PASSWORD_TOO_SHORT,
  INVALID_USERNAME_OR_PASSWORD,
  SERVER_ERROR
};

export interface ILoginAction extends IAction {
  type: UserActionType.LOGIN,
  payload: {
    email: string;
    password: string;
    rememberMe: boolean;
  }
}

export interface ILoginSuccessAction extends IAction {
  type: UserActionType.LOGIN_SUCCESS,
  payload: {
    response: IAuthResponse,
    rememberMe: boolean
  }
}

export interface ILoginFailedAction extends IAction {
  type: UserActionType.LOGIN_FAILED,
  payload: {
    error: UserLoginError[]
  }
}

export interface ILogoutAction extends IAction {
  type: UserActionType.LOGOUT
}

export enum UserSignUpError {
  EMAIL_MISSING,
  INVALID_EMAIL,
  PASSWORD_MISSING,
  PASSWORD_TOO_SHORT,
  USERNAME_MISSING,
  USERNAME_TOO_SHORT,
  USER_EXISTS,
  SERVER_ERROR
}

export interface ISignUpAction extends IAction {
  type: UserActionType.SIGNUP,
  payload: {
    username: string;
    email: string;
    password: string;
  }
}

export interface ISignUpSuccessAction extends IAction {
  type: UserActionType.SIGNUP_SUCCESS,
  payload: IAuthResponse
}

export interface ISignUpFailedAction extends IAction {
  type: UserActionType.SIGNUP_FAILED,
  payload: {
    error: UserSignUpError[];
  }
}

export const DEFAULT_USER_STATE: IUserState = {
  isLoggedIn: false,
  isLoginInProgress: false,
  isSignUpInProgress: false,
  rememberMe: false
};

export type IUserActions = ILoginAction | ILoginSuccessAction | ILoginFailedAction | ILogoutAction
  | ISignUpAction | ISignUpSuccessAction | ISignUpFailedAction;
