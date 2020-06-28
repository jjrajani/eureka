import * as t from "./types";
import modifyAndOpenPDF from "../../utils/modifyAndOpenPDF";

export const emailCollectionFormSubmit = (vals, results) => async (
  dispatch
) => {
  const thing = await modifyAndOpenPDF(results);
  // window.open(thing, "_blank");

  // console.log("vals", vals);
};
