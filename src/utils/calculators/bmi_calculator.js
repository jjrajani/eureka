const feetToIn = (feet) => feet * 12;
const heightToIn = (feet, IN) => {
  let feetInInches = feetToIn(feet),
    inches = IN + feetInInches;

  return inches;
};

const StandardBMICalculator = (lbs, height) => {
  let { IN, ft } = height;
  IN = parseInt(IN);
  ft = parseInt(ft);

  let inches = heightToIn(ft, IN);

  inches = inches * inches;

  let BMI = 703 * (lbs / inches);

  return BMI.toFixed(2);
};

const BMICalculator = (lbs, height) => {
  let standard = StandardBMICalculator(lbs, height);

  return standard;
};

export default BMICalculator;
