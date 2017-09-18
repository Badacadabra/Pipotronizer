import React from 'react';
import App from '../../App';
import renderer from 'react-test-renderer';

const app = new App();

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

it('has correct initial state', () => {
  expect(app.state.level).toEqual('manager');
  expect(app.state.levelColor).toEqual('#44DBBD');
  expect(app.state.wheelSpeed).toEqual(1000);
  expect(typeof app.state.sky).not.toBe(undefined);
  expect(app.state.fontLoaded).toEqual(false);
});

it('changes level properly', () => {
  expect(() => {
    app.changeLevel('stagiaire');
  }).not.toThrow();

  expect(() => {
    app.changeLevel('manager');
  }).not.toThrow();

  expect(() => {
    app.changeLevel('consultant');
  }).not.toThrow();

  expect(() => {
    app.changeLevel('boss');
  }).toThrow('Incorrect level!');
});

it('has a working header', () => {
  expect(() => {
    app.help();
  }).not.toThrow();

  expect(() => {
    app.vibrate();
  }).not.toThrow();

  expect(() => {
    app.share();
  }).not.toThrow();
});
