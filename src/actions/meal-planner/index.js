import * as t from "./types";

export const calculateResults = (vals) => (dispatch) => {
  dispatch({ type: t.CALCULATE_RESULTS_START });
  setTimeout(() => {
    // set timeout to give chart time to unmount and rerender
    dispatch({ type: t.CALCULATE_RESULTS_SUCCESS, payload: vals });
  }, 10);
};

export const modifyAndOpenPDF = (dispatch) => {
  dispatch({ type: t.MODIFY_AND_OPEN_PDF });
};
