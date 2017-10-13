import React from 'react';
import Pipo from '../components/Pipo';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

function isSentence() {
  expect(typeof pipo.instance().getSentence()).toBe('string');
  expect(pipo.instance().getSentence()).toBeTruthy();
  expect(pipo.instance().getSentence().length).toBeGreaterThan(20);
}

const pipo = shallow(<Pipo level="confirmé" update={ () => null }/>);

it('renders without crashing', () => {
  expect(pipo).toBeTruthy();
});

it('can capitalize', () => {
  expect(pipo.instance().capitalize('foo')).toEqual('Foo');
  expect(pipo.instance().capitalize('lorem ipsum')).toEqual('Lorem ipsum');
});

it('generates substring properly', () => {
  expect(() => {
    pipo.instance().getSubstring();
  }).toThrow();

  expect(pipo.instance().getSubstring(['foo'])).toEqual('foo');

  expect(pipo.instance().getSubstring(['foo', 'bar'], 'foo')).toEqual('bar');
});

it('generates a sentence', () => {
  pipo.setProps({ level: 'junior' });
  isSentence();

  pipo.setProps({ level: 'confirmé' });
  isSentence();

  pipo.setProps({ level: 'senior' });
  isSentence();

  expect(() => {
    pipo.setProps({ level: 'boss' });
  }).toThrow('Incorrect level!');
});
