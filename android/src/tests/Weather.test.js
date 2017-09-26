import React from 'react';
import Wheel from '../components/Wheel';
import renderer from 'react-test-renderer';
import cloudy from '../../assets/images/background-2.jpg';

it('renders without crashing', () => {
  const rendered = renderer.create(<Wheel weather={cloudy} duration={1000} />).toJSON();
  expect(rendered).toBeTruthy();
});
