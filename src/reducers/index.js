import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import mealPlanner from "./mealPlanner";

// combine to single object
export const reducers = {
  form,
  mealPlanner,
};

// add factory reset for store
const makeRootReducer = (reducers) => {
  return (state, action) => {
    return combineReducers(reducers)(state, action);
  };
};

// define root reducer
const rootReducer = makeRootReducer(reducers);
export default rootReducer;
