import * as t from "../actions/meal-planner/types";
import BMICalculator from "../utils/bmi_calculator";
import BMRCalculator from "../utils/bmr_calculator";
import CalorieIntakeCalculator from "../utils/calorie_intake_calculator";
import MacroRatioCalculator from "../utils/macro_ratio_calculator";

/**
 * Redux_MealPlannerState
 * @interface Redux_MealPlannerState
 * @property {boolean} [loading=false]
 */
const mealPlannerInitialState = {
  didCompute: false,
  loading: false,
  results: {},
};

export default (state = mealPlannerInitialState, action) => {
  switch (action.type) {
    case t.CALCULATE_RESULTS_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case t.CALCULATE_RESULTS_SUCCESS: {
      let bmi = BMICalculator(action.payload.weight, {
        ft: action.payload.heightFt,
        IN: action.payload.heightIn,
      });

      let BMR = BMRCalculator({
        age: action.payload.age,
        gender: action.payload.gender,
        feet: action.payload.heightFt,
        inches: action.payload.heightIn,
        weight: action.payload.weight,
      });

      let calorieIntake = CalorieIntakeCalculator({
        activity: action.payload.activity,
        age: action.payload.age,
        goal: action.payload.goal,
        gender: action.payload.gender,
        feet: action.payload.heightFt,
        inches: action.payload.heightIn,
        weight: action.payload.weight,
      });

      return {
        ...state,
        didCompute: true,
        loading: false,
        results: {
          bmi,
          bmr: {
            mifflin: BMR.mifflin,
            harris: BMR.harris,
          },
          calorieIntake: {
            mifflin: calorieIntake.mifflin,
            harris: calorieIntake.harris,
          },
          macro: MacroRatioCalculator(action.payload.goal),
        },
      };
    }
    default:
      return state;
  }
};
