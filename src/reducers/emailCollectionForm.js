import * as t from "../actions/email-collection-form/types";
// import modifyAndOpenPDF from "../../../utils/modifyAndOpenPDF";

/**
 * Redux_MealPlannerState
 * @interface Redux_MealPlannerState
 * @property {boolean} [loading=false]
 */
const mealPlannerInitialState = {
  PDF: false,
  loading: false,
  didSubscribe: false,
  didDismiss: false,
};

export default (state = mealPlannerInitialState, action) => {
  switch (action.type) {
    case t.EMAIL_COLLECTION_FORM_SUBMIT_START: {
      return {
        ...state,
        loading: true,
      };
    }

    case t.EMAIL_COLLECTION_SUCCESS: {
      return {
        ...state,
        loading: false,
        didSubscribe: true,
      };
    }

    case t.COMPLETE_EMAIL_COLLECTION: {
      return {
        ...state,
        didDismiss: true,
      };
    }
    default:
      return state;
  }
};
