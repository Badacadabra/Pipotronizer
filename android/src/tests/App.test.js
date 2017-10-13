import React from 'react';
import App from '../../App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const app = shallow(<App />);

it('renders without crashing', () => {
  expect(app).toBeTruthy();
});

it('has correct initial state', () => {
  expect(app.state().level).toEqual('confirmé');
  expect(app.state().levelColor).toEqual('#44DBBD');
  expect(app.state().wheelSpeed).toEqual(1000);
  expect(typeof app.state().sky).not.toBe(undefined);
});

it('changes level properly', () => {
  expect(() => {
    app.instance().changeLevel('junior');
  }).not.toThrow();

  expect(() => {
    app.instance().changeLevel('confirmé');
  }).not.toThrow();

  expect(() => {
    app.instance().changeLevel('senior');
  }).not.toThrow();

  expect(() => {
    app.instance().changeLevel('boss');
  }).toThrow('Incorrect level!');
});

it('has a working header', () => {
  expect(() => {
    app.instance().help();
  }).not.toThrow();

  /* expect(() => {
    app.instance().browse();
  }).not.toThrow(); */

  expect(() => {
    app.instance().share();
  }).not.toThrow();
});

it('has working ads', () => {
  expect(() => {
    app.instance().update();
  }).not.toThrow();
});
