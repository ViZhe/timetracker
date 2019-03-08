
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { Link } from 'react-router-dom';

import { NotFound } from '../index';


describe('<NotFound />', () => {
  const notFound: ShallowWrapper = shallow(<NotFound />);

  it('should match snapshot', () => {
    expect(notFound).toMatchSnapshot();
  });

  it('should have one Link', () => {
    expect(notFound.find(Link).length).toEqual(1);
  });

  it('should have Link to root', () => {
    expect(notFound.find(Link).prop('to')).toEqual('/');
  });
});
