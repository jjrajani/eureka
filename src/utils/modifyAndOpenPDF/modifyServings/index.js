import modifyCarbs from "./modifyCarbs";
import modifyFats from "./modifyFats";
import modifyProtein from "./modifyProtein";
import modifyWater from "./modifyWater";

const modifyServings = (
  pages,
  listPage,
  servingSize,
  font,
  trackerPos,
  listPos,
  color
) => {
  pages[1].drawText("" + servingSize, {
    ...trackerPos,
    size: 11,
    font: font.bold,
    color,
  });

  pages[listPage].drawText("" + servingSize, {
    ...listPos,
    size: 28,
    font: font.bold,
    color,
  });
};

export default modifyServings;
export { modifyCarbs, modifyFats, modifyProtein, modifyWater };
