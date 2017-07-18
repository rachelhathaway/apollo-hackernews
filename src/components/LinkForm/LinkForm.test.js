import { shallow } from 'enzyme';
import React from 'react';
import FormField from '../FormField';
import LinkForm from './LinkForm';

jest.mock('../FormField');

window.localStorage = {
  getItem: jest.fn(() => 1),
  setItem: jest.fn()
};

function setup(propsOverrides = {}) {
  const props = Object.assign({}, {
    createLinkMutation: jest.fn(),
    history: {
      push: jest.fn()
    }
  }, propsOverrides);
  const wrapper = shallow(<LinkForm {...props} />);
  return {
    wrapper,
    props,
    inputs: wrapper.find(FormField),
    button: wrapper.find('button')
  };
}

describe('LinkForm', () => {
  it('should render', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });

  it('should render two inputs', () => {
    const { inputs } = setup();
    expect(inputs.length).toBe(2);
  });

  it('should bind the input values to the component state', () => {
    const { wrapper, inputs } = setup();
    expect(wrapper.state('description')).toEqual('');
    expect(wrapper.state('url')).toEqual('');
    inputs.forEach((input, i) => input.simulate('change', { target: { value: i }}));
    expect(wrapper.state('description')).toEqual(0);
    expect(wrapper.state('url')).toEqual(1);
  });

  it('should render a button', () => {
    const { button } = setup();
    expect(button.length).toBe(1);
  });

  it('should call the createLinkMutation prop with the correct args on button click', () => {
    const { wrapper, button, props } = setup();
    const state = { url: 'http://google.com', description: 'google' };
    wrapper.setState(state);
    button.simulate('click');
    expect(props.createLinkMutation).toHaveBeenCalledWith({ variables: Object.assign({}, state, {
      postedById: 1
    })});
  });

  it('should redirect to the root route on button click', () => {
    const { wrapper, button, props } = setup();
    button.simulate('click');
    expect(props.history.push).toHaveBeenCalledWith('/');
  });
});
