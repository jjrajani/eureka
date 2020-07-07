import isMobile from "./isMobile";
import PDF from "../assets/meal_planner.pdf";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
const red = rgb(0.54, 0.1, 0.1);
const green = rgb(0.5451, 0.74, 0.267);
const yellow = rgb(0.9765, 0.7255, 0.22);
const blue = rgb(0.192, 0.4157, 0.5649);

const protienTrackerCountPos = { x: 195, y: 270 };
const protienFoodListCountPos = { x: 80, y: 417 };

const carbsTrackerCountPos = { x: 360, y: 270 };
const carbsFoodListCountPos = { x: 80, y: 254 };

const fatsTrackerCountPos = { x: 525, y: 270 };
const fatsFoodListCountPos = { x: 80, y: 57 };

const waterTrackerCountPos = { x: 685, y: 270 };
const waterFoodListCountPos = { x: 77, y: 432 };

// const colWidth = 166;
// const boxWidth = 9;
// const boxMargin = 2.5;

const downloadPDF = (fileUrl) => {
  let element = document.createElement("a");
  element.setAttribute("href", fileUrl);
  element.setAttribute("download", "my-meal-planner.pdf");
  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
};

const generateCheckBoxes = (startX, startY, color, boxCount, page) => {
  let x = startX;
  let y = startY;

  for (let day = 0; day < 7; day++) {
    if (day !== 0) {
      y -= 33;
    }

    for (let box = 0; box < boxCount; box++) {
      if (box !== 0) {
        x += 14;
      } else {
        x = startX;
      }
      page.drawRectangle({
        borderColor: color,
        borderWidth: 1,
        height: 10,
        width: 10,
        x,
        y,
      });
    }
  }
};

const modifyProteinServings = (pages, servingSize, font) => {
  const [page1, page2] = pages;

  page1.drawText("" + servingSize, {
    ...protienTrackerCountPos,
    size: 11,
    font,
    color: red,
  });

  page2.drawText("" + servingSize, {
    ...protienFoodListCountPos,
    size: 11,
    font,
    color: red,
  });

  generateCheckBoxes(133, 234, red, servingSize, page1);
};

const modifyCarbServingSizes = (pages, servingSize, font) => {
  const [page1, page2] = pages;
  servingSize = "" + servingSize;

  page1.drawText(servingSize, {
    ...carbsTrackerCountPos,
    size: 11,
    font,
    color: green,
  });

  page2.drawText(servingSize, {
    ...carbsFoodListCountPos,
    size: 11,
    font,
    color: green,
  });

  generateCheckBoxes(297, 234, green, servingSize, page1);
};

const modifyFatServingSizes = (pages, servingSize, font) => {
  const [page1, page2] = pages;
  servingSize = "" + servingSize;

  page1.drawText(servingSize, {
    ...fatsTrackerCountPos,
    size: 11,
    font,
    color: yellow,
  });

  page2.drawText(servingSize, {
    ...fatsFoodListCountPos,
    size: 11,
    font,
    color: yellow,
  });

  generateCheckBoxes(463, 234, yellow, servingSize, page1);
};

const modifyWaterServingSizes = (pages, servingSize, font) => {
  servingSize = "" + servingSize;

  pages[0].drawText(servingSize, {
    ...waterTrackerCountPos,
    size: 11,
    font: font,
    color: blue,
  });

  pages[2].drawText(servingSize, {
    ...waterFoodListCountPos,
    size: 11,
    font,
    color: blue,
  });
  // servingSize = 1;
  if (servingSize > 10) {
    generateCheckBoxes(627, 240, blue, 10, pages[0]);
    generateCheckBoxes(627, 228, blue, servingSize - 10, pages[0]);
  } else {
    generateCheckBoxes(627, 234, blue, servingSize, pages[0]);
  }
};

const modifyAndOpenPDF = async (results) => {
  const existingPdf = await fetch(PDF).then((res) => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(existingPdf);
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const pages = pdfDoc.getPages();

  modifyProteinServings(
    pages,
    results.handSizes.proteinServing.palms,
    helveticaFont
  );

  modifyCarbServingSizes(
    pages,
    results.handSizes.carbsServing.palms,
    helveticaFont
  );

  modifyFatServingSizes(
    pages,
    results.handSizes.fatServing.palms,
    helveticaFont
  );

  modifyWaterServingSizes(pages, results.handSizes.waterServing, helveticaFont);

  const pdfBytes = await pdfDoc.save();
  const file = new Blob([pdfBytes], { type: "application/pdf" });
  const fileUrl = URL.createObjectURL(file);

  isMobile() ? window.open(fileUrl, "_blank") : downloadPDF(fileUrl);
};

export default modifyAndOpenPDF;
