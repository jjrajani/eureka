// import createSagaMiddleware from 'redux-saga';
// import reduxMulti from 'redux-multi';
// import moment from 'moment';
// import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import isNodeEnv from "./utils/isNodeEnv";
import { isEqual } from "lodash";
import rootReducer from "./reducers";

// export const LOGGER = createLogger({ collapsed: true });
// export const SAGA = createSagaMiddleware();

let previousAction = null;
const myLogger = (/*store*/) => (next) => (action) => {
  if (isEqual(previousAction, action)) {
    console.log("dispatching duplicate - previous action", previousAction);
    console.log("dispatching duplicate - new action", action);
    // console.log('next state', store.getState());
  }
  previousAction = action;
  // console.log('dispatching', action);
  let result = next(action);
  // console.log('next state', store.getState());
  return result;
};

const doApplyMiddleware = () => {
  return applyMiddleware(
    thunk,
    // reduxMulti,
    // SAGA,
    /*LOGGER,*/ /*this.logger,*/ myLogger
  );
};

// <--- Redux Beacon
const store = isNodeEnv("development")
  ? composeWithDevTools(doApplyMiddleware())
  : doApplyMiddleware();
// create store with dev tools and middleware
export const STORE = createStore(rootReducer, store);
