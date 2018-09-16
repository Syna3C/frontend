import { AppConstants } from '../../constants/app';
import { IEventResponse } from '../../interfaces/responses/IEventResponse';
import { EventActionType, EventError, IEventsFailedAction, IEventsSuccessAction, IGetEventsAction } from './EventTypes';

export class EventActions {

  /**
   * pull event feed data from the database
   */
  public static getEvents(pageNum: number = 1, pageSize: number = AppConstants.DEFAULT_PAGE_SIZE): IGetEventsAction {
    console.log("event action")
    return {
      payload: {
        pageNum,
        pageSize
      },
      type: EventActionType.GET_EVENTS
    }
  }
  /**
   * Create a new successful login action with the response of the login network request
   * as the payload.
   * @param eventResponse The JSON response of the event request
   *
   */
  public static getEventsSuccess(eventResponse: IEventResponse): IEventsSuccessAction {
    return {
      payload: eventResponse,
      type: EventActionType.GET_EVENTS_SUCCESS
    }
  }
  /**
   * Create a new failed login action with the type of error as the payload
   *
   * @param error The type of error (EventError enum)
   */
  public static getEventsFailed(...error: EventError[]): IEventsFailedAction {
    return {
      payload: {
        error
      },
      type: EventActionType.GET_EVENTS_FAILED,
    };
  }
}