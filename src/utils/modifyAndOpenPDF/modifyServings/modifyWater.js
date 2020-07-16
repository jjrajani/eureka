import generateCheckBoxes from "../generateCheckBoxes";
import modifyServings from "./";
import { blue } from "../colors";

const waterTrackerCountPos = { x: 685, y: 307 },
  waterFoodListCountPos = { x: 75, y: 65 },
  listPage = 2;

const modifyWater = (pages, servingSize, font) => {
  modifyServings(
    pages,
    listPage,
    servingSize,
    font,
    waterTrackerCountPos,
    waterFoodListCountPos,
    blue
  );

  generateCheckBoxes(613.5, 284, blue, servingSize, pages[0]);
};

export default modifyWater;
