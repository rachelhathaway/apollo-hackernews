import { shallow } from 'enzyme';
import React from 'react';
import FormField from './index';

function setup(propsOverrides = {}) {
  const props = Object.assign({}, {
    placeholder: 'name',
    onChange: jest.fn(),
    value: ''
  }, propsOverrides);
  const wrapper = shallow(<FormField {...props} />);
  return {
    wrapper,
    props
  };
}

describe('FormField', () => {
  it('should render', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });

  it('should set the value from the value prop', () => {
    const { wrapper } = setup({ value: 'Rachel' });
    expect(wrapper.prop('value')).toBe('Rachel');
  });

  it('should default to a text field', () => {
    const { wrapper } = setup();
    expect(wrapper.prop('type')).toBe('text');
  });

  it('should set the type from the type prop', () => {
    const { wrapper } = setup({ type: 'password' });
    expect(wrapper.prop('type')).toBe('password');
  });

  it('should use the placeholder prop', () => {
    const { wrapper, props } = setup();
    expect(wrapper.prop('placeholder')).toContain(props.placeholder);
  });

  it('should call the onChange prop on change', () => {
    const { wrapper, props } = setup();
    wrapper.simulate('change');
    expect(props.onChange).toHaveBeenCalled();
  });
});
