import React from "react";
import PropTypes from "prop-types";
import ResultsPanelItem from "../../molecules/ResultsPanelItem";
import MyExpansionPanel from "../../molecules/MyExpansionPanel";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import createPDF from "../../../utils/createPDF";
import Button from "@material-ui/core/Button";

/**
 * MealPlannerResults
 * @param {MealPlannerResults} props
 */

const MealPlannerResults = ({ results }) => {
  return (
    <div className="" id="results">
      <MyExpansionPanel title="Results">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className="">
              <ResultsPanelItem type="protien" />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className="">
              <ResultsPanelItem type="carbs" />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className="">
              <ResultsPanelItem type="fats" />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className="">
              <ResultsPanelItem type="water" />
            </Paper>
          </Grid>
        </Grid>
      </MyExpansionPanel>
      <p style={{ color: "green" }}>BMI Standard: {results.bmi.standard}</p>
      <p>BMI Ponderal: {results.bmi.ponderal}</p>

      <p>BMR Mifflin: {results.bmr.mifflin}</p>
      <p>BMI Harris: {results.bmr.harris}</p>

      <p>Calorie Intake Mifflin: {results.calorieIntake.mifflin}</p>
      <p>Calorie Intake Harris: {results.calorieIntake.harris}</p>

      <p>Macro Protien: {results.macro.protien}</p>
      <p>Macro Carbs: {results.macro.carbs}</p>
      <p>Macro Fats: {results.macro.fats}</p>
      <Button
        variant="contained"
        color="primary"
        onClick={createPDF.bind(this, results)}
        id="download"
      >
        Download
      </Button>
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
