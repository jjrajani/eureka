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

  let bmr = parseInt(BMR);

  let calorieIntake = bmr;

  if (activity === "low") {
    calorieIntake *= 1.375;
  } else if (activity === "moderate") {
    calorieIntake *= 1.55;
  } else if (activity === "high") {
    calorieIntake *= 1.725;
  }

  if (goal === "weight-loss") {
    calorieIntake -= 500;
  } else if (goal === "body-recomp") {
    calorieIntake -= 250;
  }

  return calorieIntake.toFixed(0);
};

export default CalorieIntakeCalculator;
