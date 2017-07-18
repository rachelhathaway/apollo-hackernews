import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { GC_USER_ID, GC_AUTH_TOKEN } from '../../constants';
import AuthForm from './AuthForm';
import AuthQueryWrapper from '../../queries/User';

class WrappedAuthForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      login: true,
      name: '',
      email: '',
      password: ''
    };
    this.confirm = this.confirm.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.toggleLoginState = this.toggleLoginState.bind(this);
  }

  render() {
    const { login, name, email, password } = this.state;
    const { confirm, handleFieldChange, toggleLoginState } = this;
    const props = {
      login,
      name,
      email,
      password,
      confirm,
      handleFieldChange,
      toggleLoginState
    }
    return(
      <AuthForm {...props} />
    );
  }

  async confirm() {
    const { name, email, password, login } = this.state;
    const { createUserMutation, signinUserMutation } = this.props;
    const method = login ? signinUserMutation : createUserMutation;
    const variables = login ? { email, password } : { name, email, password };
    const result = await method({ variables });
    const { user, token } = result.data.signinUser;
    this.saveUserData(user.id, token);
  }

  handleFieldChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  saveUserData(id, token) {
    localStorage.setItem(GC_USER_ID, id);
    localStorage.setItem(GC_AUTH_TOKEN, token);
    this.props.history.push('/');
  }

  toggleLoginState() {
    this.setState({ login: !this.state.login });
  }

}

WrappedAuthForm.propTypes = {
  history: PropTypes.object.isRequired,
  createUserMutation: PropTypes.func.isRequired,
  signinUserMutation: PropTypes.func.isRequired
};

export default AuthQueryWrapper(WrappedAuthForm);
