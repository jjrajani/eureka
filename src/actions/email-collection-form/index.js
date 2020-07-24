import * as t from "./types";
import modifyAndOpenPDF from "../../utils/modifyAndOpenPDF";
import addUserData from "../../utils/GoogleSpreadSheet/userData";
import { showModal } from "../modal";
import mailChimpSubscribe from "../../utils/mailchimp/subscribeUser";

export const emailCollectionFormSubmit = (
  vals,
  mealPlannerInput,
  results
) => async (dispatch) => {
  await addUserData({
    First: vals.first,
    Last: vals.last,
    Email: vals.email,
    Age: mealPlannerInput.age,
    Gender: mealPlannerInput.gender,
    Weight: mealPlannerInput.weight,
    heightFt: mealPlannerInput.heightFt,
    heightIn: mealPlannerInput.heightIn,
    Water: mealPlannerInput.water,
    Activity: mealPlannerInput.activity,
    Goal: mealPlannerInput.goal,
    Diet: mealPlannerInput.diet,
  });

  await mailChimpSubscribe({
    email: vals.email,
    fName: vals.first,
    lName: vals.last,
  });

  await modifyAndOpenPDF(results, mealPlannerInput);
  dispatch({ type: t.EMAIL_COLLECTION_SUCCESS });
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
