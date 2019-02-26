
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';

import { reducer as timesReducer } from './times';
import { reducer as userReducer } from './user';


export const createRootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  times: timesReducer,
  user: userReducer,
});
