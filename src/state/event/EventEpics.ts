import { AnyAction } from "redux";
import { ActionsObservable, combineEpics, Epic, ofType, StateObservable } from "redux-observable";
import { Observable, of } from 'rxjs';
import { AjaxCreationMethod, AjaxError } from "rxjs/internal/observable/dom/AjaxObservable";
import { catchError, map, mergeMap } from 'rxjs/operators';

import { ApiConstants } from "../../constants/api";
import { IState } from "../../interfaces/IState";
import { IEventResponse } from "../../interfaces/responses/IEventResponse";
import { EventActions } from "./EventActions";
import { EventActionType, EventError, IEventActions } from "./EventTypes";

export class EventEpics {
  public static ALL = combineEpics(
    EventEpics.getEvents as Epic<AnyAction, AnyAction, IState, AjaxCreationMethod>
  );

  /**
   * makes request to get event feed
   */
  public static getEvents(action$: ActionsObservable<IEventActions>, state$: StateObservable<IState>, { getJSON }: AjaxCreationMethod): Observable<IEventActions> {
    console.log("events epic");
    return action$.pipe(
      ofType(EventActionType.GET_EVENTS),
      mergeMap(() => getJSON<IEventResponse>(ApiConstants.GET_EVENTS_URL)
        .pipe(
          map(eventsResponse => {
            console.log('Events response = ', eventsResponse);
            return EventActions.getEventsSuccess(eventsResponse);
          })
        )),
      catchError((err: AjaxError) => {
        console.log("test failed getting data")
        return of(EventActions.getEventsFailed(err.status === 401 ? EventError.SERVER_ERROR : EventError.SERVER_ERROR));
      })

    );

  }
}