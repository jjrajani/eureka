import React from "react";
import PropTypes from "prop-types";

/**
 * MealPlannerResults
 * @param {MealPlannerResults} props
 */

const MealPlannerResults = ({ results }) => {
  const openPDF = () => {
    const win = window.open(
      "https://docs.google.com/document/d/e/2PACX-1vStOq78LpK9MlfAtoZRcXCJ22wzHp8M8v-JnQsjnWD8iXZigKyqw8u0hwmMH8zD4INOIQ_hheQjMF5t/pub",
      "_blnk"
    );
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
