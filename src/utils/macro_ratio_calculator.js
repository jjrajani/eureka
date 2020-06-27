const MacroRatioCalculator = (goal) => {
  let protein, carbs, fats;

  if (goal === "weight-loss") {
    protein = 30;
    carbs = 25;
    fats = 45;
  } else if (goal === "improve-health") {
    protein = 30;
    carbs = 40;
    fats = 30;
  } else if (goal === "body-recomp") {
    protein = 45;
    carbs = 25;
    fats = 30;
  }

  return {
    protein,
    carbs,
    fats,
  };
};

export default MacroRatioCalculator;
