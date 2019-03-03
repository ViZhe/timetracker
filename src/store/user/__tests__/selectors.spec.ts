
import {
  userSelectors as selectors,
} from '../';
import { IUserState } from '../models';


describe('User Selectors', () => {
  const initialState: IUserState = {
    name: 'test',
  };

  it('should select user\'s data', () => {
    expect(selectors.getUser(initialState)).toEqual(initialState);
  });
});
