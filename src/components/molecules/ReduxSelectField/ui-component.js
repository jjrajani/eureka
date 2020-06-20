import React from "react";
import PropTypes from "prop-types";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

/**
 * ReduxSelectField
 * @param {ReduxSelectFieldProps} props
 */
const ReduxSelectField = ({ inputProps, field, options }) => {
  return (
    <FormControl variant={"outlined"}>
      <InputLabel id={inputProps.labelId}>{inputProps.label}</InputLabel>
      <Select
        {...field.input}
        {...inputProps}
        name={field.input.name}
        variant="outlined"
      >
        {options.map((o) => (
          <MenuItem key={o.value} value={o.value}>
            {o.displayValue}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
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
