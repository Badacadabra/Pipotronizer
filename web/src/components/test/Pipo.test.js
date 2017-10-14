import React from 'react';
import ReactDOM from 'react-dom';
import Pipo from '../js/Pipo';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Pipo level="junior" money={10} changeLevel={null} />, div);
  ReactDOM.render(<Pipo level="confirmé" money={50} changeLevel={null} />, div);
  ReactDOM.render(<Pipo level="senior" money={100} changeLevel={null} />, div);
});

it('has correct initial state', () => {
  const pipo = shallow(<Pipo level="confirmé" money={50} changeLevel={null} />);
  expect(pipo.state().money).toEqual(0);
});

it('handles level change properly', () => {
  const pipo = shallow(<Pipo level="confirmé" money={50} changeLevel={() => null} />);

  expect(pipo.instance().getSubstring(['foo', 'bar'], 'bar')).toEqual('foo');
  expect(pipo.state().money).toEqual(0);

  expect(() => {
    pipo.instance().isCorrect('boss');
  }).toThrow('Incorrect level!');

  expect(() => {
    pipo.instance().changeLevel({target: { value: 'junior' }});
  }).not.toThrow();

  expect(pipo.state().money).toEqual(25); // 0 + 25

  expect(() => {
    pipo.instance().changeLevel({target: { value: 'confirmé' }});
  }).not.toThrow();

  expect(pipo.state().money).toEqual(75); // 0 + 25 + 50

  expect(() => {
    pipo.instance().changeLevel({target: { value: 'senior' }});
  }).not.toThrow();

  expect(pipo.state().money).toEqual(175); // 0 + 25 + 50 + 100

  expect(() => {
    pipo.instance().changeLevel({target: { value: 'boss' }});
  }).toThrow('Incorrect level!');
});

it('handles fragment change properly', () => {
  const pipo = shallow(<Pipo level="confirmé" money={50} changeLevel={() => null} />);
  expect(pipo.state().money).toEqual(0);

  expect(() => {
    pipo.instance().changeFragment({target: { className: 'fragment test'}})
  }).toThrow('Invalid string type!');

  pipo.instance().changeFragment({target: { className: 'fragment sujets' }});
  expect(pipo.state().money).toEqual(10);
});

it('can copy the current sentence', () => {
  const pipo = mount(<Pipo level="confirmé" money={50} changeLevel={() => null} />),
        txt = pipo.instance().getText();

  expect(txt).not.toEqual(undefined);
  expect(typeof txt).toEqual('string');
  expect(txt.length).toBeGreaterThan(20);

  expect(() => {
    pipo.instance().onCopy();
  }).not.toThrow();
});
