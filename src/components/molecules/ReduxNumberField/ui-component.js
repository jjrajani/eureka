import React from "react";
import PropTypes from "prop-types";
// import TextField from "@material-ui/core/TextField";
/**
 * ReduxNumberField
 * @param {ReduxNumberFieldProps} props
 */
const ReduxNumberField = ({ inputProps, field }) => {
  return (
    <input
      {...field.input}
      {...inputProps}
      type="number"
      placeholder={inputProps.label}
    />
  );
};
/**
 * ReduxNumberFieldProps
 * @typedef {Object} ReduxNumberFieldProps
 */
ReduxNumberField.defaultProps = {};
ReduxNumberField.propTypes = {
  inputProps: PropTypes.object,
  // mdProps: PropTypes.object,
  field: PropTypes.object,
};

export default ReduxNumberField;
