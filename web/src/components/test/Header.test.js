import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../js/Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header level="stagiaire" />, div);
  ReactDOM.render(<Header level="manager" />, div);
  ReactDOM.render(<Header level="consultant" />, div);
});

it('throws a custom error if level is wrong', () => {
  const div = document.createElement('div');
  expect(() => {
    ReactDOM.render(<Header level="" />, div);
  }).toThrow('Unknown level!');
});
