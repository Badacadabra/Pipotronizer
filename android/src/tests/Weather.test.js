import React from 'react';
import Weather from '../components/Weather';
import cloudy from '../../assets/images/background-2.jpg';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const weather = shallow(<Weather sky={cloudy} wind={1000} />);
  expect(weather).toBeTruthy();
});
