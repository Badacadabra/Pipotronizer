import React from 'react';
import ReactDOM from 'react-dom';
import App from '../js/App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('has correct initial state', () => {
  let app = new App();
  expect(app.state.level).toEqual('confirmé');
  expect(app.state.money).toEqual(0);
});

it('handles level change properly', () => {
  const app = shallow(<App />);

  expect(app.state().level).toEqual('confirmé');
  expect(app.state().money).toEqual(0);

  app.instance().changeLevel('junior');

  expect(app.state().level).toEqual('junior');
  expect(app.state().money).toEqual(10); // 0 + 10

  app.instance().changeLevel('confirmé');

  expect(app.state().level).toEqual('confirmé');
  expect(app.state().money).toEqual(60); // 0 + 10 + 50

  app.instance().changeLevel('senior');

  expect(app.state().level).toEqual('senior');
  expect(app.state().money).toEqual(160); // 0 + 10 + 50 + 100

  expect(() => {
    app.instance().changeLevel('boss');
  }).toThrow();
});
