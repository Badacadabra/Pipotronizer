import React from 'react';
import ReactDOM from 'react-dom';
import Headline from '../js/Headline';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Headline />, div);
});
