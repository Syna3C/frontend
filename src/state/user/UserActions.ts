import { IAuthResponse } from '../../interfaces/responses/IAuthResponse';
import { ILoginAction, ILoginFailedAction, ILoginSuccessAction, ISignUpAction, ISignUpFailedAction, ISignUpSuccessAction, UserActionType, UserLoginError, UserSignUpError } from './UserTypes';

export class UserActions {

  /**
   * Create a new action to start the login network request, with the login form data as the payload
   *
   * @param formData The username and password from the login form
   */
  public static login(formData: { email: string; password: string; rememberMe?: boolean }): ILoginAction {
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
  public static loginSuccess(loginResponse: IAuthResponse): ILoginSuccessAction {
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
  public static loginFailed(...error: UserLoginError[]): ILoginFailedAction {
    return {
      payload: {
        error
      },
      type: UserActionType.LOGIN_FAILED,
    };
  }

  public static signUp(formData: { username: string; email: string; password: string }): ISignUpAction {
    return {
      payload: formData,
      type: UserActionType.SIGNUP
    };
  }

  public static signUpSuccess(signUpResponse: IAuthResponse): ISignUpSuccessAction {
    return {
      payload: signUpResponse,
      type: UserActionType.SIGNUP_SUCCESS
    }
  }

  public static signUpFailed(...errors: UserSignUpError[]): ISignUpFailedAction {
    return {
      payload: {
        error: errors
      },
      type: UserActionType.SIGNUP_FAILED
    }
  }
}