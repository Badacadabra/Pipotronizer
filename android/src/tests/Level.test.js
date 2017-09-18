import React from 'react';
import Level from '../components/Level';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const junior = renderer.create(<Level level="junior" color="#F4BF31" fontLoaded={true} />).toJSON();
  expect(junior).toBeTruthy();

  const confirmé = renderer.create(<Level level="confirmé" color="#44DBBD" fontLoaded={true} />).toJSON();
  expect(confirmé).toBeTruthy();

  const senior = renderer.create(<Level level="senior" color="#9FD7FC" fontLoaded={true} />).toJSON();
  expect(senior).toBeTruthy();
});
