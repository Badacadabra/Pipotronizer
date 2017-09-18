import React from 'react';
import Pipo from '../components/Pipo';
import renderer from 'react-test-renderer';

const pipo = new Pipo();

function isSentence() {
  expect(typeof pipo.getSentence()).toBe('string');
  expect(pipo.getSentence()).toBeTruthy();
  expect(pipo.getSentence().length).toBeGreaterThan(20);
}

it('renders without crashing', () => {
  const rendered = renderer.create(<Pipo level="manager" />).toJSON();
  expect(rendered).toBeTruthy();
});

it('can capitalize', () => {
  expect(pipo.capitalize('foo')).toEqual('Foo');
  expect(pipo.capitalize('lorem ipsum')).toEqual('Lorem ipsum');
});

it('generates substring properly', () => {
  expect(() => {
    pipo.getSubstring();
  }).toThrow();

  expect(pipo.getSubstring(['foo'])).toEqual('foo');

  expect(pipo.getSubstring(['foo', 'bar'], 'foo')).toEqual('bar');
});

it('generates a sentence', () => {
  pipo.props = { level: 'stagiaire' };
  isSentence();

  pipo.props = { level: 'manager' };
  isSentence();

  pipo.props = { level: 'consultant' };
  isSentence();

  pipo.props = { level: 'boss' };
  expect(() => {
    pipo.getSentence();
  }).toThrow('Incorrect level!');
});
