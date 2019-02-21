
import { ActionType } from 'typesafe-actions';

import * as userActions from './actions';
import { SET_DATA } from './constants';


export type UserAction = ActionType<typeof userActions>;
export interface IUserState {
  name: string | null;
}

const initialState = {
  name: null,
};

export default (state: IUserState = initialState, action: UserAction) => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
