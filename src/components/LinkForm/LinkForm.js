import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { GC_USER_ID } from '../../constants'
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
            required={true}
            onChange={e => this.setState({ description: e.target.value })}
            placeholder="Add a link description"
          />
          <FormField
            value={url}
            required={true}
            onChange={e => this.setState({ url: e.target.value })}
            placeholder="Add a link url"
          />
          <button className="button" onClick={this.handleClick}>Submit</button>
        </div>
      </div>
    )
  }

  async handleClick(e) {
    const { createLinkMutation, history } = this.props;
    const postedById = localStorage.getItem(GC_USER_ID);
    if (!postedById) {
      return;
    }
    const { description, url } = this.state;
    createLinkMutation({ variables: { postedById, description, url } });
    history.push('/');
  }

}

LinkForm.propTypes = {
  createLinkMutation: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default LinkForm;
