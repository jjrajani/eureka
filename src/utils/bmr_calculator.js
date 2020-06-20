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

const harrisCalc = ({ age, gender, height, weight }) => {
  // Men	BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5
  // Women	BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161
  age = parseInt(age);
  height = inToCm(parseInt(height));
  weight = lbsToKg(parseInt(weight));

  let BMR;

  if (gender === "male") {
    weight = weight * 13.397;
    height = height * 4.799;
    age = age * 5.677;

    BMR = weight + height - age + 88.362;
  } else {
    weight = weight * 9.247;
    height = height * 3.098;
    age = age * 4.33;

    BMR = weight + height - age + 447.593;
  }

  return BMR.toFixed(0);
};
// const katchCalc = () => {
//     // not sure we can do this with the user input provided, need to be able to calculate body fat percentage
// };

const BMRCalculator = ({ age, gender, feet, inches, weight }) => {
  let feetInInches = parseInt(feet) * 12;
  let height = feetInInches + parseInt(inches);
  let mifflin = mifflinCalc({ age, gender, height, weight });
  let harris = harrisCalc({ age, gender, height, weight });
  //   let katch = katchCalc();

  return {
    mifflin,
    harris,
    // katch,
  };
};

export default BMRCalculator;
