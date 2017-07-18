import { shallow } from 'enzyme';
import React from 'react';
import AuthForm from './AuthForm';
import FormField from '../FormField';

jest.mock('../FormField');

function setup(propsOverrides = {}, state = {}) {
  const props = Object.assign({}, {
    login: true,
    name: 'Rachel',
    email: 'rachel@apartmenttherapy.com',
    password: 'kewl',
    confirm: jest.fn(),
    handleFieldChange: jest.fn(),
    toggleLoginState: jest.fn()
  }, propsOverrides);
  const wrapper = shallow(<AuthForm {...props} />);
  return {
    wrapper,
    props,
    fields: wrapper.find(FormField)
  };
}

describe('AuthForm', () => {
  it('should render', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });

  it('should render email and password fields if the user is logging in', () => {
    const { wrapper, fields } = setup();
    expect(fields.length).toEqual(2);
  });

  it('should render name, email, and password fields if the user is signing up', () => {
    const { wrapper, fields } = setup({ login: false });
    expect(fields.length).toEqual(3);
  });

  it('should bind the input values to the component state', () => {
    const { fields, props } = setup({ login: false });
    expect(fields.map(f => f.prop('value'))).toEqual([
      props.name,
      props.email,
      props.password
    ]);
  });
});
