import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
/**
 * ReduxNumberField
 * @param {ReduxNumberFieldProps} props
 */
const ReduxNumberField = ({ inputProps, mdProps, field }) => {
  return (
    <TextField
      {...field.input}
      {...inputProps}
      inputProps={mdProps}
      name={field.input.name}
      type="number"
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
  mdProps: PropTypes.object,
  field: PropTypes.object,
};

export default ReduxNumberField;
