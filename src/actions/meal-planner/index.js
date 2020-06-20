import * as t from "./types";

export const calculateResults = (vals) => (dispatch) => {
  dispatch({ type: t.CALCULATE_RESULTS_START });
  dispatch({ type: t.CALCULATE_RESULTS_SUCCESS, payload: vals });

  // setTimeout(() => {
  // }, 2000);
};
