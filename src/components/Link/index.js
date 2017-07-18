import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Link extends Component {

  render() {
    const { description, url } = this.props;
    return (
      <a href={url}>{description}</a>
    );
  }

  async voteForLink() {

  }

}

Link.propTypes = {
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Link;
