
import { shallow } from 'enzyme';
import React from 'react';

import PageLoading from '../../PageLoading';


describe('<PageLoading />', () => {
  it('should match snapshot', () => {
    const component = shallow(<PageLoading />);

    expect(component).toMatchSnapshot();
  });
});
