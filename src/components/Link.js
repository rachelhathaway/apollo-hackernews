import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Link extends Component {

  render() {
    const { link } = this.props;
    return (
      <a href={link.url}>{link.description}</a>
    );
  }

  _voteForLink() {

  }

}

Link.propTypes = {
  link: PropTypes.shape({
    description: PropTypes.string,
    url: PropTypes.string
  }).isRequired
};

export default Link;
