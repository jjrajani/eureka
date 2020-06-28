import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import isNodeEnv from "./utils/isNodeEnv";
import { isEqual } from "lodash";
import rootReducer from "./reducers";

let previousAction = null;
const myLogger = (/*store*/) => (next) => (action) => {
  if (isEqual(previousAction, action)) {
    console.log("dispatching duplicate - previous action", previousAction);
    console.log("dispatching duplicate - new action", action);
  }
  previousAction = action;
  let result = next(action);
  return result;
};

const doApplyMiddleware = () => {
  return applyMiddleware(thunk, myLogger);
};

const store = isNodeEnv("development")
  ? composeWithDevTools(doApplyMiddleware())
  : doApplyMiddleware();

export const STORE = createStore(rootReducer, store);
