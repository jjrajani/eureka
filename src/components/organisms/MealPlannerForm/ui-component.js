import React, { Component } from "react";
import PropTypes from "prop-types";
import MealPlannerResults from "../MealPlannerResults";
import "./style.scss";
import MY_INFO_INPUTS from "./my_info_inputs";
import ReduxField from "../../molecules/ReduxField";
import String from "../../atoms/String";

/**
 * [MealPlannerForm description]
 * @extends Component
 */
class MealPlannerForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...MY_INFO_INPUTS.reduce((accum, input) => {
        return {
          ...accum,
          [input.inputProps.name]: ReduxField.renderFields([input])[0],
        };
      }, {}),
    };
  }

  render() {
    if (this.props.isSV) {
      return this.renderSV();
    } else {
      return this.renderMV();
    }
  }

  renderSV = () => {
    const { didCompute } = this.props;
    return (
      <>
        <div className="container rmp-wrapper">
          <div className="text-center">
            <h3>
              <strong>
                <String textKey="myInfo.title" />
              </strong>
            </h3>
          </div>
          <form onSubmit={this.props.handleSubmit(this.props.submit)}>
            <div className="row">
              <div className="col-12">{this.state.age}</div>
            </div>
            <div className="row">
              <div className="col-12">{this.state.gender}</div>
            </div>
            <div className="row">
              <div className="col-6">{this.state.heightFt}</div>
              <div className="col-6">{this.state.heightIn}</div>
            </div>
            <div className="row">
              <div className="col-12">{this.state.weight}</div>
            </div>
            <div className="row">
              <div className="col-12">{this.state.activity}</div>
            </div>
            <div className="row">
              <div className="col-12">{this.state.goal}</div>
            </div>
            <div className="row">
              <div className="col-12">{this.state.diet}</div>
            </div>
            <div className="row">
              <div className="col-12">{this.state.water}</div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        {didCompute && <MealPlannerResults />}
      </>
    );
  };

  renderMV = () => {
    const { didCompute } = this.props;
    return (
      <>
        <div className="container rmp-wrapper">
          <div className="text-center" style={{ padding: ".75rem 1.25rem" }}>
            <h3>
              <strong>
                <String textKey="myInfo.title" />
              </strong>
            </h3>
          </div>
          <form onSubmit={this.props.handleSubmit(this.props.submit)}>
            <div className="row">
              <div className="col-4">{this.state.age}</div>
              <div className="col-4">{this.state.gender}</div>
              <div className="col-4">{this.state.weight}</div>
            </div>
            <div className="row">
              <div className="col-3">{this.state.heightFt}</div>
              <div className="col-3">{this.state.heightIn}</div>
              <div className="col-6">{this.state.water}</div>
            </div>
            <div className="row">
              <div className="col-4">{this.state.activity}</div>
              <div className="col-4">{this.state.goal}</div>
              <div className="col-4">{this.state.diet}</div>
            </div>
            <div className="row"></div>
            <div className="row"></div>
            <button type="submit">Submit</button>
          </form>
        </div>
        {didCompute && <MealPlannerResults />}
      </>
    );
  };
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
  isSV: PropTypes.bool.isRequired,
  isLV: PropTypes.bool.isRequired,
  submit: PropTypes.func.isRequired,
};

export default MealPlannerForm;
