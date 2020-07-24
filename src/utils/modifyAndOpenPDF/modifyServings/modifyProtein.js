import generateCheckBoxes from "../generateCheckBoxes";
import modifyServings from "./";
import { red } from "../colors";

const protienTrackerCountPos = { x: 195, y: 304 },
  protienFoodListCountPos = { x: 73, y: 330 },
  listPage = 2;

const modifyProtein = (pages, servingSize, font) => {
  modifyServings(
    pages,
    listPage,
    servingSize,
    font,
    protienTrackerCountPos,
    protienFoodListCountPos,
    red
  );
  generateCheckBoxes(120, 284, red, servingSize, pages[1]);
};

export default modifyProtein;
