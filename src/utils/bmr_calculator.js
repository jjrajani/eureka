const lbsToKg = (lbs) => lbs / 2.2046;
const inToCm = (inches) => inches * 2.54;

const mifflinCalc = ({ age, gender, height, weight }) => {
  // Mifflin-St Jeor Equation:
  // BMR (kcal / day) = 10 * weight (kg) + 6.25 * height (cm) – 5 * age (y) + s (kcal / day)
  // where s is +5 for males and -161 for females.

  age = parseInt(age) * 5;
  height = inToCm(parseInt(height)) * 6.25;
  weight = lbsToKg(parseInt(weight)) * 10;

  let BMR;

  if (gender === "male") {
    BMR = weight + height - age + 5;
  } else {
    BMR = weight + height - age - 161;
  }

  return BMR.toFixed(0);
};

const BMRCalculator = ({ age, gender, feet, inches, weight }) => {
  let feetInInches = parseInt(feet) * 12;
  let height = feetInInches + parseInt(inches);
  let mifflin = mifflinCalc({ age, gender, height, weight });

  return mifflin;
};

export default BMRCalculator;
