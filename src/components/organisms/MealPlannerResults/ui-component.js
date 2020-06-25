import React from "react";
import PropTypes from "prop-types";
import PDF from "../../../assets/protein_5_carbs_6_fats_7_water_10.pdf";

/**
 * MealPlannerResults
 * @param {MealPlannerResults} props
 */

const MealPlannerResults = ({ results }) => {
  const openPDF = () => {
    const win = window.open(PDF, "_blank");
    win.focus();
  };
  return (
    <div className="">
      <p>BMI Standard: {results.bmi.standard}</p>
      <p>BMI Ponderal: {results.bmi.ponderal}</p>

      <p>BMR Mifflin: {results.bmr.mifflin}</p>
      <p>BMI Harris: {results.bmr.harris}</p>

      <p>Calorie Intake Mifflin: {results.calorieIntake.mifflin}</p>
      <p>Calorie Intake Harris: {results.calorieIntake.harris}</p>

      <p>Macro Protien: {results.macro.protien}</p>
      <p>Macro Carbs: {results.macro.carbs}</p>
      <p>Macro Fats: {results.macro.fats}</p>
      <button target="_blank" rel="noopener noreferrer" onClick={openPDF}>
        Download
      </button>
    </div>
  );
};

/**
 * MealPlannerResults
 * @typedef {Object} MealPlannerResultsProps
 */
MealPlannerResults.defaultProps = {};
MealPlannerResults.propTypes = {
  results: PropTypes.object,
};

export default MealPlannerResults;
