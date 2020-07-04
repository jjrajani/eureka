import * as t from "./types";
import modifyAndOpenPDF from "../../utils/modifyAndOpenPDF";
import axios from "axios";

const isDev = false;
const url = isDev
  ? "http://localhost:5000/meal_planner_user_data"
  : "https://eureka-holistic-nutrition.herokuapp.com/meal_planner_user_data";

export const emailCollectionFormSubmit = (
  vals,
  mealPlannerInput,
  results
) => async (dispatch) => {
  dispatch({ type: t.EMAIL_COLLECTION_FORM_SUBMIT_START });
  await axios.post(url, {
    First: vals.first,
    Last: vals.last,
    Email: vals.email,
    Age: mealPlannerInput.age,
  });
  await modifyAndOpenPDF(results);
  dispatch({ type: t.EMAIL_COLLECTION_SUCCESS });
};

export const closeEmailCollectionModal = () => {
  window.$("#email-collection").modal("toggle");
};

export const dismissEmailCollectionForm = () => (dispatch) => {
  closeEmailCollectionModal();
  dispatch({ type: t.COMPLETE_EMAIL_COLLECTION });
};
