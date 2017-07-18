import { shallow } from 'enzyme';
import React from 'react';
import Link from './Link';

window.localStorage = {
  getItem: jest.fn(),
  setItem: jest.fn()
};

function setup(propsOverrides = {}) {
  const props = Object.assign({}, {
    url: 'http://google.com',
    description: 'Google',
    votes: 2,
    postedBy: 'Leona',
    createdAt: Date.now(),
    createVoteMutation: jest.fn()
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
    expect(wrapper.find('a').prop('href')).toEqual(props.url);
  });

  it('should use the description prop for the link text', () => {
    const { wrapper, props } = setup();
    expect(wrapper.find('a').text()).toEqual(props.description);
  });
});
