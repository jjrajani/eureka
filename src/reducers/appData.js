import * as t from "../actions/app-data/types";
// import modifyAndOpenPDF from "../../../utils/modifyAndOpenPDF";

/**
 * Redux_MealPlannerState
 * @interface Redux_MealPlannerState
 * @property {boolean} [loading=false]
 */
const appDataInitialState = {
  data: {},
  loading: false,
};

export default (state = appDataInitialState, action) => {
  switch (action.type) {
    case t.GET_APP_DATA_START: {
      return {
        ...state,
        loading: true,
      };
    }

    case t.GET_APP_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }

    case t.GET_APP_DATA_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};
