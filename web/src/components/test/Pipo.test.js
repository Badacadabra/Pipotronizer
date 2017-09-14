import React from 'react';
import ReactDOM from 'react-dom';
import Pipo from '../js/Pipo';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Pipo level="stagiaire" money={10} changeLevel={null} />, div);
  ReactDOM.render(<Pipo level="manager" money={50} changeLevel={null} />, div);
  ReactDOM.render(<Pipo level="consultant" money={100} changeLevel={null} />, div);
});

it('handles level change properly', () => {
  const app = shallow(<Pipo level="manager" money={50} changeLevel={() => null} />);

  expect(app.instance().getSubstring(['foo', 'bar'], 'bar')).toEqual('foo');

  expect(() => {
    app.setProps({level: 'boss'});
  }).toThrow('Incorrect level!');

  expect(() => {
    app.instance().changeLevel({target: { value: 'stagiaire' }});
  }).not.toThrow();

  expect(() => {
    app.instance().changeLevel({target: { value: 'manager' }});
  }).not.toThrow();

  expect(() => {
    app.instance().changeLevel({target: { value: 'consultant' }});
  }).not.toThrow();

  expect(() => {
    app.instance().changeLevel({target: { value: 'boss' }});
  }).toThrow('Incorrect level!');
});
