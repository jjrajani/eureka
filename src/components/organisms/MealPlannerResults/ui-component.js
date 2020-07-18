import React from "react";
import PropTypes from "prop-types";
import EmailCollectionForm from "../EmailCollectionForm";
import String from "../../atoms/String";
import DownloadResultsButton from "../../molecules/DownloadResultsButton";
import MealPlannerResultsCards from "../../molecules/MealPlannerResultsCards";
import scrollResultsIntoView from "../../../utils/scrollResultsIntoView";
import "./style.scss";
import addCommasToNumber from "../../../utils/addCommasToNumber";

/**
 * MealPlannerResults
 * @param {MealPlannerResults} props
 */

class MealPlannerResults extends React.Component {
  componentDidMount = () => {
    scrollResultsIntoView();

    this.initEmailCollectionModal();
  };

  scrollResultsIntoView = () => {
    let results = document.getElementById("react-results");
    if (results) {
      results.scrollIntoView({ behavior: "smooth" });
    }
  };

  initEmailCollectionModal = () => {
    this.props.initModal({
      header: <h2>Lorem.. Email</h2>,
      body: <div>Email Collection Form</div>,
    });
  };

  render() {
    const { results } = this.props;

    return (
      <>
        <EmailCollectionForm />
        <div id="react-results" className="rmp-container rmp-wrapper">
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
                      {addCommasToNumber(results.calorieIntake)}{" "}
                      <String textKey="myNumbers.calories.text" />
                    </p>
                  </div>

                  <MealPlannerResultsCards />

                  <div className="col-sm-12 justify-content-sm-center">
                    <div className="col text-center">
                      <DownloadResultsButton />
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
  results: PropTypes.object,
};

export default MealPlannerResults;
