
import { Icon } from 'antd';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import GlobalHeader from '../../GlobalHeader';


describe('<GlobalHeader />', () => {
  let component:ShallowWrapper;
  const collapsed = false;
  const onClick = jest.fn();

  beforeEach(() => {
    component = shallow(
      <GlobalHeader
        collapsed={collapsed}
        onClickTrigger={onClick}
      />,
    );
  });

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should be collapsed by default', () => {
    expect(component.find(Icon).get(0).props.type).toEqual('menu-fold');
  });

  it('should call onClick once', () => {
    component.find(Icon).simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
