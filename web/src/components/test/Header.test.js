import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../js/Header';
import { mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header level="junior" />, div);
  ReactDOM.render(<Header level="confirmé" />, div);
  ReactDOM.render(<Header level="senior" />, div);
});

it('throws a custom error if level is wrong', () => {
  const div = document.createElement('div');
  expect(() => {
    ReactDOM.render(<Header level="" />, div);
  }).toThrow('Unknown level!');
});

it('toggles sound properly', () => {
  const header = mount(<Header level='confirmé' />);

  expect(header.state().soundIcon).toEqual('volume-off');
  expect(header.state().soundVol).toEqual('muted');

  // ON
  header.instance().toggleSound();

  expect(header.state().soundIcon).toEqual('volume-up');
  expect(header.state().soundVol).toEqual('');

  // OFF
  header.instance().toggleSound();

  expect(header.state().soundIcon).toEqual('volume-off');
  expect(header.state().soundVol).toEqual('muted');
});
