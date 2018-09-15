import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { combineEpics, createEpicMiddleware, Epic } from 'redux-observable';
import { ajax } from 'rxjs/ajax';

import { IState } from '../interfaces/IState';
import { EventEpics } from './event/EventEpics'
import { eventReducer } from './event/EventReducer';
import { DEFAULT_EVENT_STATE } from './event/EventTypes';
import { UserEpics } from './user/UserEpics';
import { userReducer } from './user/UserReducer';
import { DEFAULT_USER_STATE } from './user/UserTypes';


const DEFAULT_STATE: IState = {
  eventState: DEFAULT_EVENT_STATE,
  userState: DEFAULT_USER_STATE,
};

function configureStore(initialState: IState) {
  // configure middlewares
  const rootEpic = combineEpics(
    UserEpics.ALL as Epic<any>,
    EventEpics.ALL as Epic<any>
  );

  const epicMiddleware = createEpicMiddleware({
    dependencies: {
      getJSON: ajax.getJSON
    }
  });

  const middlewares = [epicMiddleware];

  if (process.env.NODE_ENV === 'development') {
    const { createLogger } = require('redux-logger');

    middlewares.push(createLogger({ collapsed: true }));
  }

  const rootReducer = combineReducers<IState>({
    eventState: eventReducer,
    userState: userReducer,
  });

  // compose enhancers
  const enhancers = compose(applyMiddleware(...middlewares));
  // create store
  const createdStore = createStore(rootReducer, initialState, enhancers);

  epicMiddleware.run(rootEpic);

  return createdStore;
}

export const store = configureStore(DEFAULT_STATE);
