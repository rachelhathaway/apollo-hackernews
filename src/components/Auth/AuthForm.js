import PropTypes from 'prop-types';
import React from 'react';
import FormField from '../FormField';

function AuthForm(props) {
  const {
    name,
    email,
    password,
    login,
    confirm,
    handleFieldChange,
    toggleLoginState
  } = props;
  return (
    <div>
      <h2 className="mv3">{login ? 'Login' : 'Sign Up'}</h2>
      <div className="flex flex-column">
        {!login &&
          <FormField
            value={name}
            name="name"
            onChange={handleFieldChange}
            placeholder="Your name"
          />
        }
        <FormField
          value={email}
          name="email"
          type="email"
          onChange={handleFieldChange}
          placeholder="Your email"
        />
        <FormField
          value={password}
          name="password"
          type="password"
          onChange={handleFieldChange}
          placeholder="Your password"
        />
      </div>
      <div className="flex mt3">
        <div className="pointer mr2 button" onClick={confirm}>
          {login ? 'login' : 'create account' }
        </div>
        <div className="pointer button" onClick={toggleLoginState}>
          {login ? 'need to create an account?' : 'already have an account?'}
        </div>
      </div>
    </div>
  );
}

AuthForm.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  login: PropTypes.bool,
  confirm: PropTypes.func.isRequired,
  handleFieldChange: PropTypes.func.isRequired,
  toggleLoginState: PropTypes.func.isRequired
};

AuthForm.defaultProps = {
  name: '',
  email: '',
  password: '',
  login: true
};

export default AuthForm;
