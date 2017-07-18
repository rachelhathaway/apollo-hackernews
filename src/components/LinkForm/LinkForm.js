import PropTypes from 'prop-types';
import React, { Component } from 'react';
import FormField from '../FormField';

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
          <FormField
            value={description}
            onChange={e => this.setState({ description: e.target.value })}
            placeholder="Add a link description"
          />
          <FormField
            value={url}
            onChange={e => this.setState({ url: e.target.value })}
            placeholder="Add a link url"
          />
          <button className="button" onClick={this.handleClick}>Submit</button>
        </div>
      </div>
    )
  }

  async handleClick(e) {
    this.props.createLinkMutation({ variables: this.state });
    this.props.history.push('/');
  }

}

LinkForm.propTypes = {
  createLinkMutation: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default LinkForm;
