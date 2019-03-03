
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import GlobalHeader from '../../../components/GlobalHeader';
import SiderMenu from '../../../components/SiderMenu';
import AppLayout from '../../AppLayout';


describe('<AppLayout />', () => {
  describe('<AppLayout /> initial', () => {
    const appLayout: ShallowWrapper = shallow(<AppLayout />);

    it('should match snapshot', () => {
      expect(appLayout).toMatchSnapshot();
    });

    it('should be not collapsed by default', () => {
      expect(appLayout.find(SiderMenu).prop('collapsed')).toBeFalsy();
      expect(appLayout.find(GlobalHeader).prop('collapsed')).toBeFalsy();
    });
  });

  describe('<AppLayout /> children', () => {
    const appLayout: ShallowWrapper = shallow(<AppLayout><div>test</div></AppLayout>);

    it('should match snapshot', () => {
      expect(appLayout).toMatchSnapshot();
    });

    it('should have children', () => {
      expect(appLayout.find('div').text()).toEqual('test');
    });
  });
});
