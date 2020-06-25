const INPUTS = [
  {
    inputProps: {
      name: "age",
      type: "number",
      id: "age",
      labelId: "age-label",
      label: "Age",

      min: 0,
    },
    width: 3,
  },
  {
    inputProps: {
      name: "gender",
      type: "select",
      id: "gender",
      labelId: "gender-label",
      label: "Gender",
    },
    options: [
      {
        value: "male",
        displayValue: "Male",
      },
      {
        value: "female",
        displayValue: "Female",
      },
    ],
    width: 3,
  },
  {
    inputProps: {
      name: "heightFt",
      type: "number",
      id: "heightFt",
      label: "Height (ft)",

      min: "0",
      max: "7",
    },
    width: 3,
  },
  {
    inputProps: {
      name: "heightIn",
      type: "number",
      id: "heightIn",
      label: "Height (in)",

      min: "0",
      max: "11",
    },
    width: 3,
  },
  {
    inputProps: {
      name: "weight",
      type: "number",
      id: "weight",
      label: "Weight",

      min: "0",
    },
    width: 12,
  },
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
      label: "Water (8oz glasses)",
      variant: "outlined",
    },
    mdProps: {
      min: 0,
    },
    width: 3,
  },
];

export default INPUTS;
