import * as t from "../actions/modal/types";
import toggleBodyClass from "../utils/toggleBodyClass";

/**
 * Redux_MealPlannerState
 * @interface Redux_MealPlannerState
 * @property {boolean} [loading=false]
 */
const modalInitialState = {
  show: false,
  showId: null,
};

// const modalItemInitialState = {
//   id: "",
//   show: false,
//   uiOpts: {
//     header: "",
//     body: ""
//   },
// };

export default (state = modalInitialState, action) => {
  switch (action.type) {
    case t.INIT_MODAL: {
      return {
        ...state,
        [action.payload.id]: {
          id: action.payload.id,
          uiOpts: {
            header: action.payload.uiOpts.header,
            body: action.payload.uiOpts.body,
          },
        },
      };
    }

    case t.SHOW_MODAL: {
      toggleBodyClass("modal-open", action.payload.show);
      return {
        ...state,
        show: action.payload.show,
        showId: action.payload.showId,
      };
    }
    default:
      return state;
  }
};
