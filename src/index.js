import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import Movdbtest2 from "./components/Movdbtest2";

import { Router } from "react-router-dom";
import history from "./history";

import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Movdbtest2 />
    </Router>
  </Provider>,

  document.getElementById("root")
);

registerServiceWorker();
