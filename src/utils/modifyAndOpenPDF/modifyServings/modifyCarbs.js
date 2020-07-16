import generateCheckBoxes from "../generateCheckBoxes";
import modifyServings from "./";
import { green } from "../colors";

const carbsTrackerCountPos = { x: 360, y: 307 };
const carbsFoodListCountPos = { x: 75, y: 65 };
const listPage = 1;

const modifyCarbs = (pages, servingSize, font) => {
  modifyServings(
    pages,
    listPage,
    servingSize,
    font,
    carbsTrackerCountPos,
    carbsFoodListCountPos,
    green
  );
  generateCheckBoxes(284.5, 284, green, servingSize, pages[0]);
};

export default modifyCarbs;
