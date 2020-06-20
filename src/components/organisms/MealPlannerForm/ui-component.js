import React, { Component } from "react";
import PropTypes from "prop-types";
import MealPlannerMyInfoFormSection from "../MealPlannerMyInfoFormSection";
import MealPlannerMyProfileFormSection from "../MealPlannerMyProfileFormSection";
import MealPlannerResults from "../MealPlannerResults";
import Button from "@material-ui/core/Button";
import "./style.scss";

/**
 * [MealPlannerForm description]
 * @extends Component
 */
class MealPlannerForm extends Component {
  render() {
    const { didCompute } = this.props;
    return (
      <form onSubmit={this.props.handleSubmit(this.props.submit)}>
        <MealPlannerMyInfoFormSection />
        <MealPlannerMyProfileFormSection />
        {didCompute && <MealPlannerResults />}
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    );
  }
}

MealPlannerForm.defaultProps = {};

/**
 * [propTypes description]
 * @interface MealPlannerFormProps
 *
 * @example {}
 */
MealPlannerForm.propTypes = {
  didCompute: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

export default MealPlannerForm;
