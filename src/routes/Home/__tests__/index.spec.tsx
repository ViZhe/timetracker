
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import { Home } from '../index';
import styles from './index.module.css';


describe('<Home />', () => {
  const props = {
    user: {
      name: null,
    },
  };

  describe('<Home /> initial', () => {
    const home: ShallowWrapper = shallow(<Home {...props} />);

    it('should match snapshot', () => {
      expect(home).toMatchSnapshot();
    });

    it('should match hello text', () => {
      expect(home.find(`.${styles.header}`).text()).toEqual('Hello, anonymous!');
    });
  });

  describe('<Home /> with props user.name', () => {
    const nextProps = {
      ...props,
      user: {
        name: 'Test name',
      },
    };

    const home:ShallowWrapper = shallow(<Home {...nextProps} />);

    it('should match snapshot', () => {
      expect(home).toMatchSnapshot();
    });

    it('should match hello text', () => {
      expect(home.find(`.${styles.header}`).text()).toEqual(`Hello, ${nextProps.user.name}!`);
    });
  });
});
