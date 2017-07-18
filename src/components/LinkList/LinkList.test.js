import { shallow } from 'enzyme';
import React from 'react';
import Link from '../Link';
import LinkList from './LinkList';

jest.mock('../Link');

function setup(propsOverrides = {}) {
  const props = Object.assign({}, {
    allLinksQuery: {
      loading: false,
      error: false,
      allLinks: [{ id: '1' }, { id: '2' }]
    }
  }, propsOverrides);
  const wrapper = shallow(<LinkList {...props} />);
  return {
    wrapper,
    props,
    links: wrapper.find(Link)
  };
}

describe('LinkList', () => {
  it('should render', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });

  it('should render each Link', () => {
    const { links } = setup();
    expect(links.length).toEqual(2);
  });

  it('should display a loading message', () => {
    const { wrapper } = setup({
      allLinksQuery: {
        loading: true
      }
    });
    expect(wrapper.text()).toContain('Loading');
  });

  it('should display an error message', () => {
    const { wrapper } = setup({
      allLinksQuery: {
        error: true
      }
    });
    expect(wrapper.text()).toContain('Error');
  });
});
