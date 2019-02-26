
import { ActionType } from 'typesafe-actions';

import * as userActions from './actions';
import { SET_DATA } from './constants';
import { IUserState } from './models';


export type UserAction = ActionType<typeof userActions>;


const initialState: IUserState = {
  name: null,
};

const reducer = (state = initialState, action: UserAction): IUserState => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};


export default reducer;
