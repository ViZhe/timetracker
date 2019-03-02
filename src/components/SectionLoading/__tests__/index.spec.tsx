
import { shallow } from 'enzyme';
import React from 'react';

import SectionLoading from '../../SectionLoading';


describe('<SectionLoading />', () => {
  it('should match snapshot', () => {
    const component = shallow(<SectionLoading />);

    expect(component).toMatchSnapshot();
  });
});
