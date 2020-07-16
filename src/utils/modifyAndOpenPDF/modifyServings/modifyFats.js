import generateCheckBoxes from "../generateCheckBoxes";
import modifyServings from "./";
import { yellow } from "../colors";

const fatsTrackerCountPos = { x: 525, y: 307 },
  fatsFoodListCountPos = { x: 75, y: 318 },
  listPage = 2;

const modifyFats = (pages, servingSize, font) => {
  modifyServings(
    pages,
    listPage,
    servingSize,
    font,
    fatsTrackerCountPos,
    fatsFoodListCountPos,
    yellow
  );
  generateCheckBoxes(448.5, 284, yellow, servingSize, pages[0]);
};

export default modifyFats;
