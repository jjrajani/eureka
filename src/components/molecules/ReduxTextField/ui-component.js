import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

/**
 * ReduxTextField
 * @param {ReduxTextFieldProps} props
 */
const ReduxTextField = ({ inputProps, field }) => (
  <TextField
    {...field.input}
    {...inputProps}
    name={field.input.name}
    type="text"
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
