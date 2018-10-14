import { AnyAction } from "redux";
import { ActionsObservable, combineEpics, Epic, ofType, StateObservable } from "redux-observable";
import { EMPTY, Observable, of } from 'rxjs';
import { AjaxCreationMethod, AjaxError } from "rxjs/internal/observable/dom/AjaxObservable";
import { catchError, map, mergeMap } from 'rxjs/operators';

import { ApiConstants } from "../../constants/api";
import { IState } from "../../interfaces/IState";
import { IAuthResponse } from "../../interfaces/responses/IAuthResponse";
import { PersistenceHelper } from "../PersistenceHelper";
import { UserActions } from "./UserActions";
import { ILoginAction, ILogoutAction, ISignUpAction, IUserActions, UserActionType, UserLoginError, UserSignUpError } from "./UserTypes";

export class UserEpics {
  public static ALL = combineEpics(
    UserEpics.loginUser as Epic<AnyAction, AnyAction, IState, AjaxCreationMethod>,
    UserEpics.logoutUser as Epic<AnyAction>,
    UserEpics.signUpUser as Epic<AnyAction, AnyAction, IState, AjaxCreationMethod>,
  );

  /**
   * Makes a network request to the login endpoint, initiating the login success action
   * or the login failed action appropriately.
   */
  public static loginUser(action$: ActionsObservable<IUserActions>, state$: StateObservable<IState>, { post }: AjaxCreationMethod): Observable<IUserActions> {
    return action$.pipe(
      ofType(UserActionType.LOGIN),
      mergeMap((userAction: ILoginAction) => post(ApiConstants.LOGIN_URL, userAction.payload).pipe(
        map(
          (loginResponse: { response: IAuthResponse }) => {
            return UserActions.loginSuccess(loginResponse.response, (userAction as ILoginAction).payload.rememberMe)
          }
        )
      )),
      catchError((err: AjaxError) => {
        return of(UserActions.loginFailed(err.status === 401 ? UserLoginError.INVALID_USERNAME_OR_PASSWORD : UserLoginError.SERVER_ERROR));
      })
    );
  }

  /**
   * Subscribes to the logout action and clears the state from local persistence
   *
   * @param action$ An observable of all user-related actions
   */
  public static logoutUser(action$: ActionsObservable<IUserActions>): Observable<IUserActions> {
    return action$.pipe(
      ofType(UserActionType.LOGOUT),
      mergeMap((userAction: ILogoutAction) => {
        PersistenceHelper.clearState()
        return EMPTY
      })
    )
  }

  public static signUpUser(action$: ActionsObservable<IUserActions>, state$: StateObservable<IState>, { post }: AjaxCreationMethod): Observable<IUserActions> {
    return action$.pipe(
      ofType(UserActionType.SIGNUP),
      mergeMap((userAction: ISignUpAction) => post(ApiConstants.SIGNUP_URL, userAction.payload).pipe(
        map(
          (signUpResponse: { response: IAuthResponse }) => {
            return UserActions.signUpSuccess(signUpResponse.response)
          }
        )
      )),
      catchError((err: AjaxError) => {
        return of(UserActions.signUpFailed(err.status === 403 ? UserSignUpError.USER_EXISTS : UserSignUpError.SERVER_ERROR));
      })
    );
  }
}