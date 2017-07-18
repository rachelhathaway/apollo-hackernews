import PropTypes from 'prop-types';
import React from 'react';

function FormField(props) {
  const validProps = Object.keys(props).reduce((p, key) => {
    if (props[key]) {
      return Object.assign({}, p, { [key]: props[key] });
    }
    return p;
  }, {});
  return (
    <input className="mb2" {...validProps} />
  );
}

FormField.propTypes = {
  onChange: PropTypes.func.isRequired
};

FormField.defaultProps = {
  required: false,
  type: 'text',
  value: ''
};

export default FormField;
