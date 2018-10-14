import { AnyAction } from "redux";
import { ActionsObservable, combineEpics, Epic, StateObservable } from "redux-observable";
import { EMPTY } from "rxjs";
import { filter, mergeMap } from "rxjs/operators";

import { IAction } from "../../interfaces/IAction";
import { IState } from "../../interfaces/IState";
import { PersistenceHelper } from "../PersistenceHelper";

export class CommonEpics {
  public static ALL = combineEpics(
    CommonEpics.persistState as Epic<AnyAction, AnyAction>
  )

  public static persistState(action$: ActionsObservable<IAction>, state$: StateObservable<IState>) {
    return action$.pipe(
      filter(action => !!action.persistState),
      mergeMap(action => {
        PersistenceHelper.persistState(state$.value)
        return EMPTY
      })
    )
  }
}