import { User } from '../models/user';
import { UserLoginError, UserSignUpError } from '../state/user/UserTypes';
export interface IUserState {
  user?: User;
  isLoggedIn: boolean;
  isLoginInProgress: boolean;
  isSignUpInProgress: boolean;
  loginErrors?: UserLoginError[];
  signUpErrors?: UserSignUpError[];
  token?: string;
}