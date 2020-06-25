import React from "react";
import PropTypes from "prop-types";

/**
 * ReduxSelectField
 * @param {ReduxSelectFieldProps} props
 */
const ReduxSelectField = ({ inputProps, field, options }) => {
  return (
    <div className="select-wrapper">
      <select {...field.input} {...inputProps}>
        <option value="">{inputProps.label}</option>
        {options.map((o) => {
          return (
            <option key={o.value} value={o.value}>
              {o.displayValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};
/**
 * ReduxSelectFieldProps
 * @typedef {Object} ReduxSelectFieldProps
 */
ReduxSelectField.defaultProps = {};
ReduxSelectField.propTypes = {
  inputProps: PropTypes.object,
  options: PropTypes.array,
  field: PropTypes.object,
};

export default ReduxSelectField;
