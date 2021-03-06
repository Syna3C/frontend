import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { combineEpics, createEpicMiddleware, Epic } from 'redux-observable';
import { ajax } from 'rxjs/ajax';

import { IState } from '../interfaces/IState';
import { CommonEpics } from './common/CommonEpics';
import { PersistenceHelper } from './PersistenceHelper';
import { UserEpics } from './user/UserEpics';
import { userReducer } from './user/UserReducer';
import { DEFAULT_USER_STATE } from './user/UserTypes';

const DEFAULT_STATE: IState = {
  userState: DEFAULT_USER_STATE
};

function configureStore(initialState: IState) {
  // configure middlewares
  const rootEpic = combineEpics(
    CommonEpics.ALL as Epic<any>,
    UserEpics.ALL as Epic<any>
  );

  const epicMiddleware = createEpicMiddleware({
    dependencies: {
      getJSON: ajax.getJSON,
      post: ajax.post
    }
  });

  const middlewares = [epicMiddleware];

  if (process.env.NODE_ENV === 'development') {
    const { createLogger } = require('redux-logger');

    middlewares.push(createLogger({ collapsed: true }));
  }

  const rootReducer = combineReducers<IState>({
    userState: userReducer
  });

  // compose enhancers
  const enhancers = compose(applyMiddleware(...middlewares));
  // create store
  const createdStore = createStore(rootReducer, initialState, enhancers);

  epicMiddleware.run(rootEpic);

  return createdStore;
}

const storedState = PersistenceHelper.restoreState()

export const store = configureStore(!!storedState ? storedState : DEFAULT_STATE);
