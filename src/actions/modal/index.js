import * as t from "./types";

export const initModal = (opts) => (dispatch) => {
  dispatch({ type: t.INIT_MODAL, payload: opts });
};

export const showModal = ({ show, showId }) => (dispatch) => {
  dispatch({ type: t.SHOW_MODAL, payload: { show, showId } });
};
