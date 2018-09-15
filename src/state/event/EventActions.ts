import { IEventResponse } from '../../interfaces/responses/IEventResponse';
import { EventActionType, EventError,IEventAction ,IEventFailedAction,  IEventSuccessAction} from './EventTypes';

export class EventActions {

  /**
   * pull event feed data from the database
   */
  public static getEvent() : IEventAction{
    console.log("event action")
    return {
      payload: 'test',
      type: EventActionType.GET_EVENT
    } 
  }
  /**
   * Create a new successful login action with the response of the login network request
   * as the payload.
   * @param eventResponse The JSON response of the event request
   *
   */
  public static getEventSuccess(eventResponse: IEventResponse): IEventSuccessAction {
    return {
      payload: eventResponse,
      type: EventActionType.GET_EVENT_SUCCESS
    }
  }
  /**
   * Create a new failed login action with the type of error as the payload
   *
   * @param error The type of error (EventError enum)
   */
  public static getEventFailed(...error: EventError[]): IEventFailedAction {
    return {
      payload: {
        error
      },
      type: EventActionType.GET_EVENT_FAILED,
    };
  }
}