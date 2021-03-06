const servingTrackerSectionHeight = 23.3152,
  servingTrackerSectionWidth = 164, // 156
  boxHeight = 10,
  boxWidth = 10,
  boxSpacing = 6,
  boxBorderWidth = 1,
  tableBoderWidth = 1.5;

const generateSingleLineCheckBoxes = (
  startX,
  startY,
  color,
  boxCount,
  page,
  offsetCount
) => {
  offsetCount = offsetCount === undefined ? boxCount : offsetCount;
  let boxesWidth = (boxWidth + boxSpacing) * offsetCount;
  let sideMargin = servingTrackerSectionWidth - boxesWidth;
  sideMargin = sideMargin / 2;
  // x - left right, y up down
  let x = startX; // + sideMargin;
  let y = (-1 * (servingTrackerSectionHeight + boxHeight)) / 2 + startY;

  for (let day = 0; day < 7; day++) {
    if (day !== 0) {
      y -=
        boxBorderWidth +
        boxBorderWidth +
        tableBoderWidth +
        tableBoderWidth +
        servingTrackerSectionHeight +
        boxHeight;
    }

    for (let box = 0; box < boxCount; box++) {
      if (box !== 0) {
        x += boxSpacing + boxWidth;
      } else {
        x = startX + sideMargin; // + sideMargin;
      }

      page.drawRectangle({
        borderColor: color,
        borderWidth: boxBorderWidth,
        height: boxHeight,
        width: boxWidth,
        x,
        y,
      });
    }
  }
};

const generateMultilineCheckBoxes = (startX, startY, color, boxCount, page) => {
  let secondGroupCount = boxCount - 8;
  let firstGroupCount = boxCount - secondGroupCount;
  let firstStartY = servingTrackerSectionHeight / 2 - 3 + startY;
  let secondStartY = -servingTrackerSectionHeight / 2 + 3 + startY;
  generateSingleLineCheckBoxes(
    startX,
    firstStartY,
    color,
    firstGroupCount,
    page,
    firstGroupCount
  );
  generateSingleLineCheckBoxes(
    startX,
    secondStartY,
    color,
    secondGroupCount,
    page,
    firstGroupCount
  );
};

const generateCheckBoxes = (startX, startY, color, boxCount, page) => {
  if (boxCount > 10) {
    generateMultilineCheckBoxes(startX, startY, color, boxCount, page);
  } else {
    generateSingleLineCheckBoxes(startX, startY, color, boxCount, page);
  }
};

export default generateCheckBoxes;
