
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import reduxLogger from 'redux-logger';

import { createRootReducer } from './reducers';


export const history = createBrowserHistory();

export const configureStore = (preloadedState = {}) => {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        reduxLogger,
      ),
    ),
  );

  return store;
};

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>;
