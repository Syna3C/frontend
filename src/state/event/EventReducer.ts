import { Reducer } from 'redux';

import { DEFAULT_EVENT_STATE, EventActionType, IEventActions} from './EventTypes';

import { Event } from '../../models/event';

import { IEventState } from "../../interfaces/IEventState";


export const eventReducer: Reducer<IEventState> = (state: IEventState = DEFAULT_EVENT_STATE, action: IEventActions) => {
  console.log(state)
  switch (action.type) {
     case EventActionType.GET_EVENT:
     return { ...state, isActiveInProgress: true, eventErrors: [] };
    case EventActionType.GET_EVENT_SUCCESS:
      return { ...state, isActive: true, isActiveInProgress: false, event: new Event(action.payload), eventErrors: [] };
    case EventActionType.GET_EVENT_FAILED:
      return { ...state, isActive: false, isActiveInProgress: false, event: undefined, eventErrors: action.payload.error };
    default:
      return state;
  }
}
