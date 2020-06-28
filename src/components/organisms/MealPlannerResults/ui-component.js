import React from "react";
import PropTypes from "prop-types";
import EmailCollectionForm from "../EmailCollectionForm";
import scrollResultsIntoView from "../../../utils/scrollResultsIntoView";

/**
 * MealPlannerResults
 * @param {MealPlannerResults} props
 */

class MealPlannerResults extends React.Component {
  componentDidMount = () => {
    scrollResultsIntoView();

    this.initEmailCollectionModal();
  };

  initEmailCollectionModal = () => {
    this.props.initModal({
      header: <h2>Lorem.. Email</h2>,
      body: <div>Email Collection Form</div>,
    });
  };

  render() {
    const { didDismiss, downloadResults, results } = this.props;

    return (
      <>
        <EmailCollectionForm />
        <div id="react-results" className="container wrapper">
          <div className="row justify-content-sm-center">
            <div className="col">
              <p className="text-center mb-0">BMI: {results.bmi}</p>
            </div>
          </div>
          <div className="row justify-content-sm-center">
            <div className="col">
              <p className="text-center mb-0">BMR: {results.bmr}</p>
            </div>
          </div>
          <div className="row justify-content-sm-center">
            <div className="col">
              <p className="text-center mb-0">
                Calorie Intake: {results.calorieIntake}
              </p>
            </div>
          </div>
          <div className="row justify-content-sm-center">
            <div className="col">
              <p className="text-center mb-0">
                Macro Protein: {results.macro.protein}
              </p>
            </div>
          </div>
          <div className="row justify-content-sm-center">
            <div className="col">
              <p className="text-center mb-0">
                Macro Carbs: {results.macro.carbs}
              </p>
            </div>
          </div>
          <div className="row justify-content-sm-center">
            <div className="col">
              <p className="text-center mb-0">
                Macro Fats: {results.macro.fats}
              </p>
            </div>
          </div>
          <div className="row justify-content-sm-center">
            <div className="col">
              <p className="text-center mb-0">
                Water Servings: {results.handSizes.waterServing}
              </p>
            </div>
          </div>
          <div className="row justify-content-sm-center">
            <div className="col text-center">
              {!didDismiss && (
                <button
                  type="button"
                  data-toggle="modal"
                  data-target="#email-collection"
                >
                  Download
                </button>
              )}
              {didDismiss && (
                <button
                  type="button"
                  onClick={downloadResults.bind(this, results)}
                >
                  Download
                </button>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

/**
 * MealPlannerResults
 * @typedef {Object} MealPlannerResultsProps
 */
MealPlannerResults.defaultProps = {};
MealPlannerResults.propTypes = {
  initModal: PropTypes.func.isRequired,
  didDismiss: PropTypes.bool.isRequired,
  downloadResults: PropTypes.func.isRequired,
  results: PropTypes.object,
};

export default MealPlannerResults;
