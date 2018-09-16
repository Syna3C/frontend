import { Reducer } from 'redux';

import { DEFAULT_EVENT_STATE, EventActionType, IEventActions } from './EventTypes';

import { Event } from '../../models/event';

import { IEventState } from "../../interfaces/IEventState";
import { Pagination } from '../../models/Pagination';


export const eventReducer: Reducer<IEventState> = (state: IEventState = DEFAULT_EVENT_STATE, action: IEventActions): IEventState => {
  console.log(state)
  switch (action.type) {
    case EventActionType.GET_EVENTS:
      return { ...state, isEventsRequestInProgress: true, eventsErrors: [] };
    case EventActionType.GET_EVENTS_SUCCESS:
      console.log('Action.payload of GET_EVENTS_SUCCESS = ', action.payload)
      return { ...state, isEventsRequestInProgress: false, events: action.payload.events.map(it => new Event(it)), eventsErrors: [], pagination: new Pagination(action.payload.pagination) };
    case EventActionType.GET_EVENTS_FAILED:
      return { ...state, isEventsRequestInProgress: false, events: undefined, eventsErrors: action.payload.error };
    default:
      return state;
  }
}
