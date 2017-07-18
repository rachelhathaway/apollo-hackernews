import { shallow } from 'enzyme';
import React from 'react';
import Link from './index';

function setup(propsOverrides = {}) {
  const props = Object.assign({}, {
    url: 'http://google.com',
    description: 'Google'
  }, propsOverrides);
  const wrapper = shallow(<Link {...props} />);
  return {
    wrapper,
    props
  };
}

describe('Link', () => {
  it('should render', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });

  it('should use the url prop for the href attribute', () => {
    const { wrapper, props } = setup();
    expect(wrapper.prop('href')).toEqual(props.url);
  });

  it('should use the description prop for the link text', () => {
    const { wrapper, props } = setup();
    expect(wrapper.text()).toEqual(props.description);
  });
});
