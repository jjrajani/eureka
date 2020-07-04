import React from "react";
import PropTypes from "prop-types";
import EmailCollectionForm from "../EmailCollectionForm";
import String from "../../atoms/String";
import scrollResultsIntoView from "../../../utils/scrollResultsIntoView";
import "./style.scss";
const WaterImgSrc =
  "https://media.istockphoto.com/vectors/glass-of-water-flat-design-vector-id902228542?k=6&m=902228542&s=612x612&w=0&h=aYqztXu9diPizPQery3JtLsxLVjDMXzVY2hrsAM5lZo=";
const BMIImgSrc =
  "https://media.istockphoto.com/vectors/or-body-mass-index-infographic-chart-vector-id930849308?k=6&m=930849308&s=612x612&w=0&h=GyCR7W_STFpFmtHq5dG6j1mJchJeariV5bGt6t4-2rM=";
const MacroImgSrc =
  "data:image/jpeg;base64,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";
const BMRImgSrc =
  "data:image/jpeg;base64,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";
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
            <div className="card">
              <div className="card-header text-center">
                <h3>
                  <strong>
                    <String textKey="myNumbers.title" />
                  </strong>
                </h3>
              </div>
              <div className="card-body">
                <div className="row justify-content-sm-center">
                  <div className="col-sm-12 text-center">
                    <p className="text-notice">
                      {results.calorieIntake.replace(
                        /\B(?=(\d{3})+(?!\d))/g,
                        ","
                      )}{" "}
                      <String textKey="myNumbers.calories.text" />
                    </p>
                  </div>

                  <div className="col-lg-6">
                    <div className="card mb-3 h-100">
                      <div className="row no-gutters">
                        <div className="col-md-4 text-center">
                          <img src={BMIImgSrc} className="card-img" alt="BMI" />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">
                              <String textKey="myNumbers.bmi.title" />:{" "}
                              {results.bmi}
                            </h5>
                            <p className="card-text">
                              <String textKey="myNumbers.bmi.body" />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="card mb-3 h-100">
                      <div className="row no-gutters">
                        <div className="col-md-4 text-center">
                          <img src={BMRImgSrc} className="card-img" alt="BMI" />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">
                              <String textKey="myNumbers.bmr.title" />:{" "}
                              {results.bmr}
                            </h5>
                            <p className="card-text">
                              <String textKey="myNumbers.bmr.body" />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="card mb-3 h-100">
                      <div className="row no-gutters">
                        <div className="col-md-4 text-center">
                          <img
                            src={MacroImgSrc}
                            className="card-img"
                            alt="BMI"
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">
                              <String textKey="myNumbers.macro.title" />:
                              25/40/35
                            </h5>
                            <p className="card-text">
                              <String textKey="myNumbers.macro.body" />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="card mb-3 h-100">
                      <div className="row no-gutters">
                        <div className="col-md-4 text-center">
                          <img
                            src={WaterImgSrc}
                            className="card-img"
                            alt="BMI"
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">
                              <String textKey="myNumbers.water.title" />:{" "}
                              {results.handSizes.waterServing}{" "}
                              <small className="text-muted">
                                <String textKey="myNumbers.water.titleSmall" />
                              </small>
                            </h5>
                            <p className="card-text">
                              <String textKey="myNumbers.water.body" />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 justify-content-sm-center">
                    <div className="col text-center">
                      {!didDismiss && (
                        <button
                          type="button"
                          data-toggle="modal"
                          data-target="#email-collection"
                        >
                          <String textKey="downloadButtonText" />
                        </button>
                      )}
                      {didDismiss && (
                        <button
                          type="button"
                          onClick={downloadResults.bind(this, results)}
                        >
                          <String textKey="downloadButtonText" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
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
