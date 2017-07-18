import { shallow } from 'enzyme';
import React from 'react';
import Login from './Login';

function setup(propsOverrides = {}) {
  const props = Object.assign({}, {

  }, propsOverrides);
  const wrapper = shallow(<Login {...props} />);
  return {
    wrapper,
    props
  };
}

describe('Login', () => {
  it('should render', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });
});
