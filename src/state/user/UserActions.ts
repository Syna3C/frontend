import { ILoginResponse } from '../../interfaces/responses/ILoginResponse';
import { ILoginAction, ILoginFailedAction, ILoginSuccessAction, UserActionType, UserLoginError } from './UserTypes';

export class UserActions {

  /**
   * Create a new action to start the login network request, with the login form data as the payload
   *
   * @param formData The username and password from the login form
   */
  public static loginUser(formData: { username: string; password: string; rememberMe?: boolean }): ILoginAction {
    return {
      payload: formData,
      type: UserActionType.LOGIN
    }
  }

  /**
   * Create a new successful login action with the response of the login network request
   * as the payload.
   *
   * @param loginResponse The JSON response of the login network request
   */
  public static loginSuccess(loginResponse: ILoginResponse): ILoginSuccessAction {
    return {
      payload: loginResponse,
      type: UserActionType.LOGIN_SUCCESS
    }
  }

  /**
   * Create a new failed login action with the type of error as the payload
   *
   * @param error The type of error (UserLoginError enum)
   */
  public static loginFailed(error: UserLoginError): ILoginFailedAction {
    return {
      payload: {
        error
      },
      type: UserActionType.LOGIN_FAILED,
    };
  }
}