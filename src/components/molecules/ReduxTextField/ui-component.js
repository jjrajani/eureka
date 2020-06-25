import React from "react";
import PropTypes from "prop-types";
// import TextField from "@material-ui/core/TextField";

/**
 * ReduxTextField
 * @param {ReduxTextFieldProps} props
 */
const ReduxTextField = ({ inputProps, field }) => (
  <input
    {...field.input}
    {...inputProps}
    type="text"
    placeholder={inputProps.label}
  />
);
/**
 * ReduxTextFieldProps
 * @typedef {Object} ReduxTextFieldProps
 */
ReduxTextField.defaultProps = {};
ReduxTextField.propTypes = {
  inputProps: PropTypes.object,
  field: PropTypes.object,
};

export default ReduxTextField;
