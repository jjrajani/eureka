import generateCheckBoxes from "../generateCheckBoxes";
import modifyServings from "./";
import { red } from "../colors";

const protienTrackerCountPos = { x: 195, y: 307 },
  protienFoodListCountPos = { x: 75, y: 330 },
  listPage = 1;

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
  generateCheckBoxes(120, 284, red, servingSize, pages[0]);
};

export default modifyProtein;
