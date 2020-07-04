const INPUTS = [
  {
    inputProps: {
      name: "age",
      type: "number",
      id: "age",
      labelId: "age-label",
      label: "Age",
      min: 0,
      labelKey: "myInfo.inputs.age.label",
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
      labelKey: "myInfo.inputs.gender.label",
      valueKey: "myInfo.inputs.gender.values",
    },
    width: 3,
  },
  {
    inputProps: {
      name: "heightFt",
      type: "number",
      id: "heightFt",
      label: "Height (ft)",
      labelKey: "myInfo.inputs.height.feet.label",
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
      labelKey: "myInfo.inputs.height.inches.label",
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
      labelKey: "myInfo.inputs.weight.label",
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
      labelKey: "myInfo.inputs.activityLevel.label",
      valueKey: "myInfo.inputs.activityLevel.values",
    },
    width: 3,
  },
  {
    inputProps: {
      name: "diet",
      type: "select",
      id: "diet",
      labelId: "diet-label",
      label: "Diet Preference",
      labelKey: "myInfo.inputs.dietPreference.label",
      valueKey: "myInfo.inputs.dietPreference.values",
    },
    width: 3,
  },
  {
    inputProps: {
      name: "goal",
      type: "select",
      id: "goal",
      labelId: "goal-label",
      label: "Goal",
      labelKey: "myInfo.inputs.goal.label",
      valueKey: "myInfo.inputs.goal.values",
    },
    width: 3,
  },
  {
    inputProps: {
      name: "water",
      type: "number",
      id: "water",
      labelId: "water-label",
      label: "Water (8oz glasses)",
      labelKey: "myInfo.inputs.water.label",
      min: "0",
    },
    width: 3,
  },
];

export default INPUTS;
