
import Chance from 'chance';
import { ActionType } from 'typesafe-actions';

import * as timesActions from './actions';
import { ADD, REMOVE } from './constants';
import { ITimesState } from './models';


export type ITimesAction = ActionType<typeof timesActions>;


// Test data
const chance = new Chance();
const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    description: chance.sentence({ words: 5 }),
    duration: `${chance.hour({ twentyfour: true })}h ${chance.minute()} min`,
    key: chance.guid(),
    tags: [chance.word(), `tag ${i}`],
    timeEnd: `${chance.hour()}:${chance.minute()}`,
    timeStart: `${chance.hour()}:${chance.minute()}`,
  });
}
// End Test data

const initialState: ITimesState = {
  data: data, // return []
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
