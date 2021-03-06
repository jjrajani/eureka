import { red } from "../colors";
import addCommasToNumber from "../../addCommasToNumber";

const color = red;
const y = 204;

const texts = (results) => [
  // Calories
  {
    text: `${addCommasToNumber(results.calorieIntake)}`,
    x: 153,
  },
  // BMI
  {
    text: `${results.bmi}`,
    x: 406.5,
  },
  // BMR
  {
    text: `${results.bmr}`,
    x: 658,
  },
];

const modifyMyNumbers = (page, results, font) => {
  texts(results).forEach((text) => {
    page.drawText(text.text, {
      x: text.x,
      y,
      size: 18,
      font: font.bold,
      color,
    });
  });
};

export default modifyMyNumbers;
