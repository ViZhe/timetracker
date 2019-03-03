
import {
  timesActions as actions,
  timesConstants as constants,
} from '../';
import { ITimesData } from '../models';


describe('Times Actions', () => {
  it('should create an action to add a times entry', () => {
    const payload:ITimesData = {
      description: 'Test dedescription',
      duration: '0.8',
      key: 'test-key',
      tags: [],
      timeEnd: 'endtimestring',
      timeStart: 'starttimestring',
    };
    const expectedAction = {
      error: undefined,
      meta: undefined,
      payload,
      type: constants.ADD,
    };

    expect(actions.add(payload)).toEqual(expectedAction);

  });
  it('should create an action to remove a times entry', () => {
    const payload = ['test'];
    const expectedAction = {
      error: undefined,
      meta: undefined,
      payload,
      type: constants.REMOVE,
    };

    expect(actions.remove(payload)).toEqual(expectedAction);
  });
});
