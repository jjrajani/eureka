const INPUTS = [
  {
    inputProps: {
      name: "activity",
      type: "select",
      id: "activity",
      labelId: "activity-label",
      label: "Activity Level",
    },
    options: [
      {
        value: "low",
        displayValue: "Low",
      },
      {
        value: "moderate",
        displayValue: "Moderate",
      },
      {
        value: "high",
        displayValue: "High",
      },
    ],
    width: 3,
  },
  {
    inputProps: {
      name: "diet",
      type: "select",
      id: "diet",
      labelId: "diet-label",
      label: "Diet Preference",
    },
    options: [
      {
        value: "vegetarian",
        displayValue: "Vegetarian",
      },
      {
        value: "vegan",
        displayValue: "Vegan",
      },
      {
        value: "pescatarian",
        displayValue: "Pescatarian",
      },
      {
        value: "keto",
        displayValue: "Keto - High Fat",
      },
      {
        value: "low-carb",
        displayValue: "Low Carb",
      },
      {
        value: "gluten-free",
        displayValue: "Gluten Free",
      },
      {
        value: "ethnic-specific",
        displayValue: "Ethnic Specific",
      },
      {
        value: "anything",
        displayValue: "Anything",
      },
    ],
    width: 3,
  },
  {
    inputProps: {
      name: "goal",
      type: "select",
      id: "goal",
      labelId: "goal-label",
      label: "Goal",
    },
    options: [
      {
        value: "weight-loss",
        displayValue: "Weight Loss",
      },
      {
        value: "improve-health",
        displayValue: "Improve Health",
      },
      {
        value: "body-recomp",
        displayValue: "Body Recomposition",
      },
    ],
    width: 3,
  },
  {
    inputProps: {
      name: "water",
      type: "number",
      id: "water",
      labelId: "water-label",
      label: "Water",
      variant: "outlined",
    },
    mdProps: {
      min: 0,
    },
    width: 3,
  },
];

export default INPUTS;
