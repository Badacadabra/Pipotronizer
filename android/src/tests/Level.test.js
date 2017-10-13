import React from 'react';
import Level from '../components/Level';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const junior = shallow(<Level level="junior" color="#F4BF31" fontLoaded={true} />);
  expect(junior).toBeTruthy();

  const confirmé = shallow(<Level level="confirmé" color="#44DBBD" fontLoaded={true} />);
  expect(confirmé).toBeTruthy();

  const senior = shallow(<Level level="senior" color="#9FD7FC" fontLoaded={true} />);
  expect(senior).toBeTruthy();
});
