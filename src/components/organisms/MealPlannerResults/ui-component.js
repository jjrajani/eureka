import React from "react";
import PropTypes from "prop-types";
import EmailCollectionForm from "../EmailCollectionForm";
// import modifyAndOpenPDF from "../../../utils/modifyAndOpenPDF";
// import PDF from "../../../assets/tracker.pdf";

/**
 * MealPlannerResults
 * @param {MealPlannerResults} props
 */

class MealPlannerResults extends React.Component {
  componentDidMount = () => {
    let results = document.getElementById("react-results");
    results.scrollIntoView(false);

    this.initEmailCollectionModal();
  };

  initEmailCollectionModal = () => {
    this.props.initModal({
      header: <h2>Lorem.. Email</h2>,
      body: <div>Email Collection Form</div>,
    });
  };

  // openEmailCollectionModal = async () => {
  // const thing = await modifyAndOpenPDF();
  // const win = window.open(thing, "_blank");
  //   // const win = window.open(
  //   //   "https://docs.google.com/document/d/e/2PACX-1vStOq78LpK9MlfAtoZRcXCJ22wzHp8M8v-JnQsjnWD8iXZigKyqw8u0hwmMH8zD4INOIQ_hheQjMF5t/pub",
  //   //   "_blank"
  //   // );
  // win.focus();
  // };

  render() {
    const { results } = this.props;

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
              <p className="text-center mb-0">BMR Mifflin: {results.bmr}</p>
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
              <button
                type="button"
                data-toggle="modal"
                data-target="#email-collection"
              >
                Download
              </button>
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
  openEmailCollectionModal: PropTypes.func.isRequired,
  results: PropTypes.object,
};

export default MealPlannerResults;
