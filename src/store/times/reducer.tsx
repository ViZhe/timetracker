
import { ActionType } from 'typesafe-actions';

import * as timesActions from './actions';
import { ADD, REMOVE } from './constants';
import { ITimesState } from './models';


export type ITimesAction = ActionType<typeof timesActions>;


const initialState: ITimesState = {
  data: [],
  isLoading: true,
};

const reducer = (state = initialState, action: ITimesAction): ITimesState => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        data: [
          ...state.data,
          action.payload,
        ],
      };

    case REMOVE:
      return {
        ...state,
        data: [
          ...state.data.filter(entry => !action.payload.includes(entry.key)),
        ],
      };

    default:
      return state;
  }
};


export default reducer;
