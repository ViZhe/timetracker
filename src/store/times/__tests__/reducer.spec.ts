
import {
  reducer,
  timesActions as actions,
} from '../';
import { ITimesData, ITimesState } from '../models';


describe('Times Reducer', () => {
  const getInitialState = (initialState?: Partial<ITimesState>) => (
    reducer(initialState as ITimesState, {} as any)
  );

  describe('initial state', () => {
    const initialState = getInitialState();

    it('should match a snapshot', () => {
      expect(initialState).toMatchSnapshot();
    });
  });

  describe('adding times entry', () => {
    const initialState = getInitialState();

    it('should add a new times entry as the first element', () => {
      const payload:ITimesData = {
        description: 'Test dedescription',
        duration: '0.8',
        key: 'test-key',
        tags: [],
        timeEnd: 'endtimestring',
        timeStart: 'starttimestring',
      };

      expect(initialState.data).toHaveLength(0);
      const state = reducer(initialState, actions.add(payload));
      expect(state.data).toHaveLength(1);
      expect(state.data[0].key).toEqual(payload.key);
    });
  });

  describe('removing times entry', () => {
    const timeEntry = {
      key: 'test-key',
    };
    const initialState = getInitialState({
      data: [timeEntry as ITimesData],
    });

    it('should remove a times entry', () => {

      expect(initialState.data).toHaveLength(1);
      const state = reducer(initialState, actions.remove([timeEntry.key]));
      expect(state.data).toHaveLength(0);
    });
  });
});
