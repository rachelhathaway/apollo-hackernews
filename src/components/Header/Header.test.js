import { shallow } from 'enzyme';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

function setup(propsOverrides = {}) {
  const props = Object.assign({}, {
    userId: '1'
  }, propsOverrides);
  const wrapper = shallow(<Header {...props} />);
  return {
    wrapper,
    props,
    links: wrapper.find(Link),
    button: wrapper.find('button')
  };
}

describe('Header', () => {
  it('should render', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should show the logout button if the user is logged in', () => {
    const { button } = setup();
    expect(button.exists()).toBe(true);
  });

  it('should hide the logout button if the user is not logged in', () => {
    const { button } = setup({ userId: undefined });
    expect(button.exists()).toBe(false);
  });

  it('should hide the link to login if the user is logged in', () => {
    const { links } = setup();
    expect(links.find({ to: '/login' }).length).toEqual(0);
  });

  it('should show the link to login if the user is not logged in', () => {
    const { links } = setup({ userId: undefined });
    expect(links.find({ to: '/login' }).length).toEqual(1);
  });

  it('should show the link to create if the user is logged in', () => {
    const { links } = setup();
    expect(links.find({ to: '/create' }).length).toEqual(1);
  });

  it('should hide the link to create if the user is not logged in', () => {
    const { links } = setup({ userId: undefined });
    expect(links.find({ to: '/create' }).length).toEqual(0);
  });
});
