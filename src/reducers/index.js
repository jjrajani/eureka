import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import emailCollectionForm from "./emailCollectionForm";
import mealPlanner from "./mealPlanner";
import modal from "./modal";

// combine to single object
export const reducers = {
  emailCollectionForm,
  form,
  mealPlanner,
  modal,
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
