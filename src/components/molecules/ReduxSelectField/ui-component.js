import React from "react";
import PropTypes from "prop-types";

/**
 * ReduxSelectField
 * @param {ReduxSelectFieldProps} props
 */
const ReduxSelectField = ({ getOptions, inputProps, field }) => {
  let opts = getOptions(inputProps.valueKey);
  if (!opts) {
    return null;
  }
  return (
    <div className="select-wrapper">
      <select
        {...field.input}
        {...inputProps}
        className={field.meta.touched && field.meta.error ? "error" : ""}
      >
        <option value="">{inputProps.label}</option>
        {opts.map((o) => {
          return (
            <option key={`${inputProps.id}-${o}`} value={o}>
              {o}
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
  getOptions: PropTypes.func.isRequired,
  inputProps: PropTypes.object,
  options: PropTypes.array,
  field: PropTypes.object,
};

export default ReduxSelectField;
