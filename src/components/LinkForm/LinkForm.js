import PropTypes from 'prop-types';
import React, { Component } from 'react';

class LinkForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      description: '',
      url: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { description, url } = this.state;
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={description}
            onChange={e => this.setState({ description: e.target.value })}
            type="text"
            placeholder="Add a link description"
          />
          <input
            className="mb2"
            value={url}
            onChange={e => this.setState({ url: e.target.value })}
            type="text"
            placeholder="Add a link url"
          />
          <button className="button" onClick={this.handleClick}>Submit</button>
        </div>
      </div>
    )
  }

  async handleClick(e) {
    this.props.createLinkMutation({ variables: this.state });
  }

}

LinkForm.propTypes = {
  createLinkMutation: PropTypes.func.isRequired
};

export default LinkForm;
