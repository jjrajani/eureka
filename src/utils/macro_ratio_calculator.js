const MacroRatioCalculator = (goal) => {
  let protien, carbs, fats;

  if (goal === "weight-loss") {
    protien = 30;
    carbs = 25;
    fats = 45;
  } else if (goal === "improve-health") {
    protien = 30;
    carbs = 40;
    fats = 30;
  } else if (goal === "body-recomp") {
    protien = 45;
    carbs = 25;
    fats = 30;
  }

  return {
    protien,
    carbs,
    fats,
  };
};

export default MacroRatioCalculator;
