import * as t from "./types";
import modifyAndOpenPDF from "../../utils/modifyAndOpenPDF";

export const emailCollectionFormSubmit = (vals, results) => async (
  dispatch
) => {
  dispatch({ type: t.EMAIL_COLLECTION_FORM_SUBMIT_START });
  setTimeout(async () => {
    await modifyAndOpenPDF(results);

    dispatch({ type: t.EMAIL_COLLECTION_SUCCESS });
  }, 1000);
};

export const closeEmailCollectionModal = () => {
  window.$("#email-collection").modal("toggle");
};

export const dismissEmailCollectionForm = () => (dispatch) => {
  closeEmailCollectionModal();
  dispatch({ type: t.COMPLETE_EMAIL_COLLECTION });
};
