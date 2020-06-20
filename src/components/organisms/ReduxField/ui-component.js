import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ReduxNumberField from "../../molecules/ReduxNumberField";
import ReduxTextField from "../../molecules/ReduxTextField";
import ReduxSelectField from "../../molecules/ReduxSelectField";
// import ./style.scss
import { Field } from "redux-form";

const renderField = ({ inputProps, mdProps, options }, field) => {
  if (field.type === "select") {
    return (
      <ReduxField.Select
        field={field}
        inputProps={inputProps}
        options={options}
        mdProps={mdProps}
      />
    );
  } else if (field.type === "number") {
    return (
      <ReduxField.Number
        field={field}
        inputProps={inputProps}
        mdProps={mdProps}
      />
    );
  } else {
    return (
      <ReduxField.Text
        field={field}
        inputProps={inputProps}
        mdProps={mdProps}
      />
    );
  }
};

const renderFields = (inputs) =>
  inputs.map((input) => {
    return (
      <Grid key={input.inputProps.name} item xs={input.width}>
        <Paper className="">
          <ReduxField input={input} />
        </Paper>
      </Grid>
    );
  });

/**
 * ReduxField
 * @param {ReduxFieldProps} props
 */
const ReduxField = ({ input }) => {
  return (
    <Field
      name={input.inputProps.name}
      type={input.inputProps.type}
      component={renderField.bind(this, input)}
    />
  );
};
/**
 * ReduxFieldProps
 * @typedef {Object} ReduxFieldProps
 */
ReduxField.defaultProps = {};
ReduxField.propTypes = {
  input: PropTypes.shape({
    inputProps: PropTypes.object,
    mdProps: PropTypes.object,
    options: PropTypes.arrayOf([
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        displayValue: PropTypes.string.isRequired,
      }),
    ]),
  }),
};

ReduxField.Text = ReduxTextField;
ReduxField.Number = ReduxNumberField;
ReduxField.Select = ReduxSelectField;
ReduxField.renderFields = renderFields;
export default ReduxField;
