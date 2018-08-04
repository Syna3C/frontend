import { Action, Reducer } from 'redux';
import { IState } from '../../interfaces/IState';

export const commonReducer: Reducer = (state: IState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
}