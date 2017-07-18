import { shallow } from 'enzyme';
import React from 'react';
import LinkForm from './LinkForm';

function setup(propsOverrides = {}) {
  const props = Object.assign({}, {
    onClick: jest.fn()
  }, propsOverrides);
  const wrapper = shallow(<LinkForm {...props} />);
  return {
    wrapper,
    props,
    inputs: wrapper.find('input'),
    button: wrapper.find('button')
  };
}

describe('Link', () => {
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

  it('should call the onClick prop when the button is clicked', () => {
    const { button, props } = setup();
    button.simulate('click');
    expect(props.onClick).toHaveBeenCalled();
  });
});
