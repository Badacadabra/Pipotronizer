import React from 'react';
import Level from '../components/Level';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const intern = renderer.create(<Level level="intern" color="#F4BF31" fontLoaded={true} />).toJSON();
  expect(intern).toBeTruthy();

  const manager = renderer.create(<Level level="manager" color="#44DBBD" fontLoaded={true} />).toJSON();
  expect(manager).toBeTruthy();

  const consultant = renderer.create(<Level level="consultant" color="#9FD7FC" fontLoaded={true} />).toJSON();
  expect(consultant).toBeTruthy();
});
