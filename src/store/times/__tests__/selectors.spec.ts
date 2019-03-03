
import {
  timesSelectors as selectors,
} from '../';
import { ITimesState } from '../models';


describe('Times Selectors', () => {
  const initialState: ITimesState = {
    data: [],
    isLoading: true,
  };

  it('should select times\'s data', () => {
    expect(selectors.getTimes(initialState)).toEqual(initialState);
  });
});
