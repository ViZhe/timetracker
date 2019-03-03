
import {
  reducer,
  userActions as actions,
} from '../';
import { IUserState } from '../models';


describe('User Reducer', () => {
  const getInitialState = (initialState?: Partial<IUserState>) => (
    reducer(initialState as IUserState, {} as any)
  );

  describe('User Reducer initial', () => {
    const initialState = getInitialState();

    it('should match a snapshot', () => {
      expect(initialState).toMatchSnapshot();
    });

    it('should set a user\'s data', () => {
      const payload = { name: 'test' };

      expect(initialState.name).toBeNull();
      const newState = reducer(initialState, actions.setData(payload));
      expect(newState.name).toEqual(payload.name);
    });
  });
});
