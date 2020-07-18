/* eslint-disable react/display-name */
import React from "react";
import MacroPieCart from "../../molecules/MacroPieChart";
const WaterImgSrc =
  "https://media.istockphoto.com/vectors/glass-of-water-flat-design-vector-id902228542?k=6&m=902228542&s=612x612&w=0&h=aYqztXu9diPizPQery3JtLsxLVjDMXzVY2hrsAM5lZo=";
const BMIImgSrc =
  "https://media.istockphoto.com/vectors/or-body-mass-index-infographic-chart-vector-id930849308?k=6&m=930849308&s=612x612&w=0&h=GyCR7W_STFpFmtHq5dG6j1mJchJeariV5bGt6t4-2rM=";
const BMRImgSrc =
  "data:image/jpeg;base64,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";

const cardData = (loading, results) => [
  {
    img: BMIImgSrc,
    alt: "BMI",
    titleTextKey: "myNumbers.bmi.title",
    data: results.bmi,
    bodyTextKey: "myNumbers.bmi.body",
  },
  {
    img: BMRImgSrc,
    alt: "BMR",
    titleTextKey: "myNumbers.bmr.title",
    data: results.bmr,
    bodyTextKey: "myNumbers.bmr.body",
  },

  {
    img: () =>
      !loading ? (
        <MacroPieCart
          data={[
            {
              title: "Protien",
              label: () => "Protien",
              value: results.macro.protein,
              color: "#c81246",
            },
            {
              title: "Carbs",
              label: () => "Carbs",
              value: results.macro.carbs,
              color: "#8bbd44",
            },
            {
              title: "Fats",
              label: () => "Fats",
              value: results.macro.fats,
              color: "#f9b938",
            },
          ]}
        />
      ) : null,
    alt: "Macro",
    titleTextKey: "myNumbers.macro.title",
    data: `${results.macro.protein}/${results.macro.carbs}/${results.macro.fats}`,
    bodyTextKey: "myNumbers.macro.body",
  },
  {
    img: WaterImgSrc,
    alt: "Water",
    titleTextKey: "myNumbers.water.title",
    titleSmallTextKey: "myNumbers.water.titleSmall",
    data: `${results.handSizes.waterServing} `,
    bodyTextKey: "myNumbers.water.body",
  },
];

export default cardData;
