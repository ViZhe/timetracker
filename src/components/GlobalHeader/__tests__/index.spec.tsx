
import { Icon } from 'antd';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import GlobalHeader from '../../GlobalHeader';


describe('<GlobalHeader />', () => {
  const props = {
    collapsed: false,
    onClickTrigger: jest.fn(),
  };

  describe('<GlobalHeader /> initial', () => {
    const globalHeader:ShallowWrapper = shallow(<GlobalHeader {...props} />);

    it('should match snapshot', () => {
      expect(globalHeader).toMatchSnapshot();
    });

    it('should be not collapsed', () => {
      expect(globalHeader.find(Icon).prop('type')).toEqual('menu-fold');
    });

    it('should call onClick once', () => {
      globalHeader.find(Icon).simulate('click');
      expect(props.onClickTrigger).toHaveBeenCalledTimes(1);
    });
  });

  describe('<GlobalHeader /> props collapsed is true', () => {
    const nextProps = {
      ...props,
      collapsed: true,
    };

    const globalHeader:ShallowWrapper = shallow(<GlobalHeader {...nextProps} />);

    it('should be collapsed', () => {
      expect(globalHeader.find(Icon).prop('type')).toEqual('menu-unfold');
    });
  });
});
