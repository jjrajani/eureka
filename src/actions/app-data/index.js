import * as t from "./types";
import defaultData from "./default_data";
import getAppData from "../../utils/GoogleSpreadSheet/appData";

export const fetchAppData = () => async (dispatch) => {
  dispatch({ type: t.GET_APP_DATA_START });
  const res = await getAppData();

  if (res.status === 200) {
    dispatch({ type: t.GET_APP_DATA_SUCCESS, payload: res.data });
  } else {
    dispatch({ type: t.GET_APP_DATA_ERROR, payload: defaultData });
  }
};
