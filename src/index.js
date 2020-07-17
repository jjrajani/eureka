import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.scss";
import "./utils/styles/conic-gradient/prefix-free.js";
import "./utils/styles/conic-gradient";
import App from "./components/ecosystems/App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { STORE } from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={STORE}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("react-eureka")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
