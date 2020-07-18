const MacroRatioCalculator = (goal) => {
  let protein, carbs, fats;

  if (goal === "Weight Loss") {
    protein = 30;
    carbs = 25;
    fats = 45;
  } else if (goal === "Improve Health") {
    protein = 30;
    carbs = 40;
    fats = 30;
  } else if (goal === "Body Recomposition") {
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
