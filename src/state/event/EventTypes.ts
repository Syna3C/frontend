
import { IEventState } from '../../interfaces/IEventState';

import { Action } from 'redux';
import { IEventResponse } from '../../interfaces/responses/IEventResponse';

export enum EventActionType {
  GET_EVENT = 'getEvent',
  GET_EVENT_FAILED = 'getEvent_failed',
  GET_EVENT_SUCCESS = 'getEvent_success',
};

export enum EventError {
  SERVER_ERROR
};

export interface IEventAction extends Action {
  payload: string,
  type: EventActionType.GET_EVENT
}

export interface IEventSuccessAction extends Action {
  type: EventActionType.GET_EVENT_SUCCESS,
  payload: IEventResponse
}

export interface IEventFailedAction extends Action {
  type: EventActionType.GET_EVENT_FAILED,
  payload: {
    error: EventError[]
  }
}

export const DEFAULT_EVENT_STATE: IEventState = {
  isActive: false,
  isActiveInProgress: false
};

export type IEventActions = IEventAction | IEventSuccessAction | IEventFailedAction;
