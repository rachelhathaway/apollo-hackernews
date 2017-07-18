import { shallow } from 'enzyme';
import React from 'react';
import LinkForm from './LinkForm';

function setup(propsOverrides = {}) {
  const props = Object.assign({}, {
    createLinkMutation: jest.fn()
  }, propsOverrides);
  const wrapper = shallow(<LinkForm {...props} />);
  return {
    wrapper,
    props,
    inputs: wrapper.find('input'),
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

  it('should bind the component state to the input values', () => {
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

  it('should call the createLinkMutation prop with the correct args', () => {
    const { wrapper, button, props } = setup();
    const state = { url: 'http://google.com', description: 'google' };
    wrapper.setState(state);
    button.simulate('click');
    expect(props.createLinkMutation).toHaveBeenCalledWith({ variables: state });
  });
});
