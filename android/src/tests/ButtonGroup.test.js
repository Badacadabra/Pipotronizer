import React from 'react';
import ButtonGroup from '../components/ButtonGroup';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const rendered = renderer.create(<ButtonGroup changeLevel={() => null} />).toJSON();
  expect(rendered).toBeTruthy();

  const btnGroup = shallow(<ButtonGroup changeLevel={() => null}/>);

  expect(() => {
    btnGroup.instance().setJunior();
  }).not.toThrow();

  expect(() => {
    btnGroup.instance().setExperienced();
  }).not.toThrow();

  expect(() => {
    btnGroup.instance().setSenior();
  }).not.toThrow();
});
