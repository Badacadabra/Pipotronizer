import React from 'react';
import ButtonGroup from '../components/ButtonGroup';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<ButtonGroup changeLevel={null} />).toJSON();
  expect(rendered).toBeTruthy();

  const btnGroup = new ButtonGroup();

  btnGroup.props = {
    changeLevel: level => {}
  };

  expect(() => {
    btnGroup.setJunior();
  }).not.toThrow();

  expect(() => {
    btnGroup.setExperienced();
  }).not.toThrow();

  expect(() => {
    btnGroup.setSenior();
  }).not.toThrow();
});