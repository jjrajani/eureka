const INPUTS = [
  {
    inputProps: {
      name: "age",
      type: "number",
      id: "age",
      labelId: "age-label",
      label: "Age",
      variant: "outlined",
    },
    mdProps: {
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
      label: "ft",
      variant: "outlined",
    },
    mdProps: {
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
      label: "in",
      variant: "outlined",
    },
    mdProps: {
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
      variant: "outlined",
    },
    mdProps: {
      min: "0",
    },
    width: 12,
  },
];

export default INPUTS;
