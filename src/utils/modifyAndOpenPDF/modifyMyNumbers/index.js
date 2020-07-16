import { red } from "../colors";
import addCommasToNumber from "../../addCommasToNumber";

const color = red;
const y = 204;

const modifyMyNumbers = (page, results, font) => {
  // Calories
  page.drawText(`${addCommasToNumber(results.calorieIntake)}`, {
    x: 153,
    y,
    size: 18,
    font: font.bold,
    color,
  });

  // BMI
  page.drawText(`${results.bmi}`, {
    x: 406.5,
    y,
    size: 18,
    font: font.bold,
    color,
  });

  // BMR
  page.drawText(`${results.bmr}`, {
    x: 658,
    y,
    size: 18,
    font: font.bold,
    color,
  });
};

export default modifyMyNumbers;
