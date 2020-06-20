import React from "react";
// import PropTypes from 'prop-types';
import MyExpansionPanel from "../../molecules/MyExpansionPanel";
import Grid from "@material-ui/core/Grid";
import ReduxField from "../ReduxField";
import INPUTS from "./inputs";
// import ./style.scss

/**
 * MealPlannerMyInfoFormSection
 * @param {MealPlannerMyInfoFormSectionProps} props
 */
class MealPlannerMyInfoFormSection extends React.Component {
  state = {
    inputs: ReduxField.renderFields(INPUTS),
  };

  render() {
    return (
      <div className={"MealPlannerMyInfoFormSection"}>
        <MyExpansionPanel title="About Me">
          <Grid container spacing={3}>
            {this.state.inputs}
          </Grid>
        </MyExpansionPanel>
      </div>
    );
  }
}

MealPlannerMyInfoFormSection.defaultProps = {};

/**
 * MealPlannerMyInfoFormSectionProps
 * @typedef {Object} MealPlannerMyInfoFormSectionProps
 */
MealPlannerMyInfoFormSection.propTypes = {};

export default MealPlannerMyInfoFormSection;
