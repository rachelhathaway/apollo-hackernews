import PropTypes from 'prop-types';
import React from 'react';

function FormField({ onChange, placeholder, type, value, name }) {
  return (
    <input
      className="mb2"
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
}

FormField.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string
};

FormField.defaultProps = {
  type: 'text',
  value: ''
};

export default FormField;
