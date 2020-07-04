import * as t from "./types";
import axios from "axios";
import defaultData from "./default_data";

const isDev = false;
const url = isDev
  ? "http://localhost:5000/meal_planner_app_data"
  : "https://eureka-holistic-nutrition.herokuapp.com/meal_planner_app_data";

export const fetchAppData = () => async (dispatch) => {
  dispatch({ type: t.GET_APP_DATA_START });
  const res = await axios.get(url);

  if (res.status === 200) {
    dispatch({ type: t.GET_APP_DATA_SUCCESS, payload: res.data });
  } else {
    dispatch({ type: t.GET_APP_DATA_ERROR, payload: defaultData });
  }
};
