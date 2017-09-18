import React from 'react';
import ReactDOM from 'react-dom';
import Pipo from '../js/Pipo';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Pipo level="junior" money={10} changeLevel={null} />, div);
  ReactDOM.render(<Pipo level="confirmé" money={50} changeLevel={null} />, div);
  ReactDOM.render(<Pipo level="senior" money={100} changeLevel={null} />, div);
});

it('handles level change properly', () => {
  const app = shallow(<Pipo level="confirmé" money={50} changeLevel={() => null} />);

  expect(app.instance().getSubstring(['foo', 'bar'], 'bar')).toEqual('foo');

  expect(() => {
    app.setProps({level: 'boss'});
  }).toThrow('Incorrect level!');

  expect(() => {
    app.instance().changeLevel({target: { value: 'junior' }});
  }).not.toThrow();

  expect(() => {
    app.instance().changeLevel({target: { value: 'confirmé' }});
  }).not.toThrow();

  expect(() => {
    app.instance().changeLevel({target: { value: 'senior' }});
  }).not.toThrow();

  expect(() => {
    app.instance().changeLevel({target: { value: 'boss' }});
  }).toThrow('Incorrect level!');
});
