import isMobile from "../isMobile";
import PDF from "../../assets/meal_planner.pdf";
import ASAPFontBold from "../../assets/Asap-Bold.ttf";
import { PDFDocument } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import {
  modifyProtein,
  modifyCarbs,
  modifyFats,
  modifyWater,
} from "./modifyServings";
import modifyMyInfo from "./modifyMyInfo";
import modifyMyNumbers from "./modifyMyNumbers";
import modifyMyMealPlan from "./modifyMyMealPlan";
import downloadPDF from "./downloadPDF";

const modifyAndOpenPDF = async (results, userInput) => {
  const asapBoldFontBytes = await fetch(ASAPFontBold).then((res) =>
    res.arrayBuffer()
  );

  const existingPdf = await fetch(PDF).then((res) => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(existingPdf);
  pdfDoc.registerFontkit(fontkit);
  // const asapFont = await pdfDoc.embedFont(asapRegFontBytes);
  const asapFontBold = await pdfDoc.embedFont(asapBoldFontBytes);
  const pages = pdfDoc.getPages();

  const font = {
    // regular: asapFont,
    bold: asapFontBold,
  };

  // proteins
  modifyProtein(pages, results.handSizes.proteinServing.palms, font);

  // carbs
  modifyCarbs(pages, results.handSizes.carbsServing.palms, font);

  // fats
  modifyFats(pages, results.handSizes.fatServing.palms, font);

  // water
  modifyWater(pages, results.handSizes.waterServing, font);

  // myInfo
  modifyMyInfo(pages[3], userInput, font);

  // myNumbers
  modifyMyNumbers(pages[3], results, font);

  // myMealPlan
  modifyMyMealPlan(pages[3], results, font);

  const pdfBytes = await pdfDoc.save();
  const file = new Blob([pdfBytes], { type: "application/pdf" });
  const fileUrl = URL.createObjectURL(file);

  isMobile() ? window.open(fileUrl, "_blank") : downloadPDF(fileUrl);
};

export default modifyAndOpenPDF;
