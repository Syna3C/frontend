import { User } from '../models/user';
import { UserLoginError } from '../state/user/UserTypes';
export interface IUserState {
  user?: User;
  isLoggedIn: boolean;
  isLoginInProgress: boolean;
  loginError?: UserLoginError;
}