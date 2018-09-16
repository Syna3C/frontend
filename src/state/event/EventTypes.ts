
import { IEventState } from '../../interfaces/IEventState';

import { Action } from 'redux';
import { IEventResponse } from '../../interfaces/responses/IEventResponse';

export enum EventActionType {
  GET_EVENTS = 'getEvents',
  GET_EVENTS_FAILED = 'getEvents_failed',
  GET_EVENTS_SUCCESS = 'getEvents_success',
};

export enum EventError {
  SERVER_ERROR
};

export interface IGetEventsAction extends Action {
  payload: {
    pageSize: number;
    pageNum: number;
  },
  type: EventActionType.GET_EVENTS
}

export interface IEventsSuccessAction extends Action {
  type: EventActionType.GET_EVENTS_SUCCESS,
  payload: IEventResponse
}

export interface IEventsFailedAction extends Action {
  type: EventActionType.GET_EVENTS_FAILED,
  payload: {
    error: EventError[]
  }
}

export const DEFAULT_EVENT_STATE: IEventState = {
  isEventsRequestInProgress: false
};

export type IEventActions = IGetEventsAction | IEventsSuccessAction | IEventsFailedAction;
