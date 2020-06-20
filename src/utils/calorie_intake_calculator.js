import BMRCalculator from "./bmr_calculator";

const CalorieIntakeCalculator = ({
  activity,
  age,
  gender,
  goal,
  feet,
  inches,
  weight,
}) => {
  let BMR = BMRCalculator({ age, gender, feet, inches, weight });

  let BMRMifflin = parseInt(BMR.mifflin),
    BMRHarris = parseInt(BMR.harris);

  let calorieIntakeMifflin = BMRMifflin,
    calorieIntakeHarris = BMRHarris;

  if (activity === "low") {
    calorieIntakeMifflin *= 1.375;
    calorieIntakeHarris *= 1.375;
  } else if (activity === "moderate") {
    calorieIntakeMifflin *= 1.55;
    calorieIntakeHarris *= 1.55;
  } else if (activity === "high") {
    calorieIntakeMifflin *= 1.725;
    calorieIntakeHarris *= 1.725;
  }

  if (goal === "weight-loss") {
    calorieIntakeMifflin -= 500;
    calorieIntakeHarris -= 500;
  } else if (goal === "body-recomp") {
    calorieIntakeMifflin -= 250;
    calorieIntakeHarris -= 250;
  }

  return {
    mifflin: calorieIntakeMifflin.toFixed(0),
    harris: calorieIntakeHarris.toFixed(0),
  };
};

export default CalorieIntakeCalculator;
