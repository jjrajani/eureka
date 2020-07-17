import * as t from "./types";
import modifyAndOpenPDF from "../../utils/modifyAndOpenPDF";
import addUserData from "../../utils/GoogleSpreadSheet/userData";
import { showModal } from "../modal";

export const emailCollectionFormSubmit = (
  vals,
  mealPlannerInput,
  results
) => async (dispatch) => {
  let didSubmit = await addUserData({
    First: vals.first,
    Last: vals.last,
    Email: vals.email,
    Age: mealPlannerInput.age,
  });

  if (didSubmit.status === 400) {
    // error updating spreadsheet
  } else if (didSubmit.status === 422) {
    // missing data
  } else if (didSubmit === "Success") {
    // success
    await modifyAndOpenPDF(results, mealPlannerInput);
    dispatch({ type: t.EMAIL_COLLECTION_SUCCESS });
  } else {
    // error
  }
};

export const closeEmailCollectionModal = () => (dispatch) => {
  window.$("#email-collection").modal("toggle");
  dispatch(showModal({ show: false, showId: "email-collection" }));
};

export const dismissEmailCollectionForm = () => (dispatch) => {
  closeEmailCollectionModal();
  dispatch({ type: t.COMPLETE_EMAIL_COLLECTION });
  dispatch(showModal({ show: false, showId: "email-collection" }));
};
