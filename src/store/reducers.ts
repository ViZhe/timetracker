
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';

import { reducer as userReducer } from '../features/user';


export const createRootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  user: userReducer,
});
