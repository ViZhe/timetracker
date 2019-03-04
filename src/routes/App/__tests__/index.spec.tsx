
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from '../index';


describe('<App />', () => {
  const app: ShallowWrapper = shallow(<App />);

  it('should match snapshot', () => {
    expect(app).toMatchSnapshot();
  });

  it('should render some routes', () => {
    expect(app.find(Switch).length).toEqual(1);
    expect(app.find(Route).length).not.toBe(0);
  });

  it('should render route path time', () => {
    expect(app.find(Route).find({ path: '/time' }).length).toEqual(1);
  });

  it('should render route path reports', () => {
    expect(app.find(Route).find({ path: '/reports' }).length).toEqual(1);
  });

  it('should render route path projects', () => {
    expect(app.find(Route).find({ path: '/projects' }).length).toEqual(1);
  });

  it('should render route path settings', () => {
    expect(app.find(Route).find({ path: '/settings' }).length).toEqual(1);
  });
});
