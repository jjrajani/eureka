import { BMRCalculator } from "./";

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

  let bmr = parseInt(BMR);

  let calorieIntake = bmr;

  if (activity === "Low") {
    calorieIntake *= 1.375;
  } else if (activity === "Moderate") {
    calorieIntake *= 1.55;
  } else if (activity === "High") {
    calorieIntake *= 1.725;
  }

  if (goal === "Weight Loss") {
    calorieIntake -= 500;
  } else if (goal === "Body Recomposition") {
    calorieIntake -= 250;
  }

  return calorieIntake.toFixed(0);
};

export default CalorieIntakeCalculator;
