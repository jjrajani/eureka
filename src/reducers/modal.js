import * as t from "../actions/modal/types";
import toggleBodyClass from "../utils/toggleBodyClass";

/**
 * Redux_MealPlannerState
 * @interface Redux_MealPlannerState
 * @property {boolean} [loading=false]
 */
const modalInitialState = {
  showBackdrop: false,
};

// const modalItemInitialState = {
//   id: "",
//   show: false,
//   [modalId]: {
//     uiOpts: {
//       header: "",
//       body: ""
//     },
//   }
// }

// };

export default (state = modalInitialState, action) => {
  switch (action.type) {
    case t.INIT_MODAL: {
      if (action.payload.show === undefined) {
        action.payload.show = false;
      }
      return {
        ...state,
        showBackdrop: action.payload.show,
        [action.payload.id]: {
          id: action.payload.id,
          show: action.payload.show,
          uiOpts: {
            header: action.payload.uiOpts.header,
            body: action.payload.uiOpts.body,
          },
        },
      };
    }

    case t.SHOW_MODAL: {
      toggleBodyClass("modal-open", action.payload.show);
      console.log("action", action);
      return {
        ...state,
        showBackdrop: action.payload.show,
        [action.payload.showId]: {
          ...state[action.payload.showId],
          show: action.payload.show,
        },
      };
    }
    default:
      return state;
  }
};
