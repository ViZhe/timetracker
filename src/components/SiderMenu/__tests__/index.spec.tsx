
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import SiderMenu from '../../SiderMenu';


describe('<SiderMenu />', () => {
  let component:ShallowWrapper;
  const collapsed = false;
  const onClick = jest.fn();

  beforeEach(() => {
    component = shallow(
      <SiderMenu
        collapsed={collapsed}
        onCollapse={onClick}
      />,
    );
  });

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
