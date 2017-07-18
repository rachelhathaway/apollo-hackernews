import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

jest.mock('react-router-dom');
jest.mock('./components/LinkForm');
jest.mock('./components/LinkList');

window.localStorage = {
  getItem: jest.fn(),
  setItem: jest.fn()
};

describe('App', () => {
  it('should render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});
