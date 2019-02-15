
import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';

import createRootReducer from './reducers';


export const history = createBrowserHistory();

const configureStore = (preloadedState: any) => {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        logger
      ),
    ),
  );

  return store;
};


export default configureStore;
