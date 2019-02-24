
import { ActionType } from 'typesafe-actions';

import * as timesActions from './actions';
import { ADD } from './constants';
import { ITimesState } from './models';


export type ITimesAction = ActionType<typeof timesActions>;


const initialState = {
  data: [],
  isLoading: true,
};

export default (state: ITimesState = initialState, action: ITimesAction) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        data: [
          ...state.data,
          action.payload,
        ],
      };

    default:
      return state;
  }
};
