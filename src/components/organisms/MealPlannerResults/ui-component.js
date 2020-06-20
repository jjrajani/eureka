import React from "react";

import PropTypes from "prop-types";

/**
 * MealPlannerResults
 * @param {MealPlannerResults} props
 */

const MealPlannerResults = ({ results }) => {
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
