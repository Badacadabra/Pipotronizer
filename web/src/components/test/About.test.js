import React from 'react';
import ReactDOM from 'react-dom';
import About from '../js/About';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<About level="junior" />, div);
  ReactDOM.render(<About level="confirmé" />, div);
  ReactDOM.render(<About level="senior" />, div);

  expect(() => {
    ReactDOM.render(<About level="" />, div);
  }).toThrow('Incorrect level!');
});
