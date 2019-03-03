
import {
  userActions as actions,
  userConstants as constants,
} from '../';


describe('User Actions', () => {
  it('should create an action to set a data', () => {
    const payload = { name: 'test' };
    const expectedAction = {
      error: undefined,
      meta: undefined,
      payload,
      type: constants.SET_DATA,
    };

    expect(actions.setData(payload)).toEqual(expectedAction);
  });
});
