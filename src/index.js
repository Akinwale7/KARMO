import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import KMFavicon from "../public/images/karmo.png";

//Redux
import { createStore, appyMiddleware, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { reducer } from "./reducers";
import { Provider } from "react-redux";

let middleWare = [thunk, logger];

const store = createStore(reducer, applyMiddleware(...middleWare));

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);

(() => {
  let link =
    document.querySelector("link[rel*='icon']") ||
    document.createElement("link");
  link.type = "image/png";
  link.rel = "shortcut icon";
  link.href = KMFavicon;
  document.getElementsByTagName("head")[0].appendChild(link);
})();

module.hot.accept();
