import React from "react";
// import PropTypes from 'prop-types';
// import MyExpansionPanel from "../../molecules/MyExpansionPanel";
// import Grid from "@material-ui/core/Grid";
import ReduxField from "../ReduxField";
import INPUTS from "./inputs";

// import ./style.scss

/**
 * MealPlannerMyProfileFormSection
 * @param {MealPlannerMyProfileFormSectionProps} props
 */
class MealPlannerMyProfileFormSection extends React.Component {
  state = {
    inputs: [],
  };

  componentDidMount = () => {
    this.setState({
      inputs: ReduxField.renderFields(INPUTS),
    });
  };

  render() {
    return (
      <div className={"MealPlannerMyProfileFormSection"}>
        {this.state.inputs}
      </div>
    );
  }
}

MealPlannerMyProfileFormSection.defaultProps = {};

/**
 * MealPlannerMyProfileFormSectionProps
 * @typedef {Object} MealPlannerMyProfileFormSectionProps
 */
MealPlannerMyProfileFormSection.propTypes = {};

export default MealPlannerMyProfileFormSection;
