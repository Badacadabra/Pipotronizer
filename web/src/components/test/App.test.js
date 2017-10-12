import React from 'react';
import ReactDOM from 'react-dom';
import App from '../js/App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('has correct initial state', () => {
  const app = shallow(<App />);
  expect(app.state().level).toEqual('confirmé');
});

it('handles level change properly', () => {
  const app = shallow(<App />);
  expect(app.state().level).toEqual('confirmé');

  app.instance().changeLevel('junior');
  expect(app.state().level).toEqual('junior');

  app.instance().changeLevel('confirmé');
  expect(app.state().level).toEqual('confirmé');

  app.instance().changeLevel('senior');
  expect(app.state().level).toEqual('senior');
});
