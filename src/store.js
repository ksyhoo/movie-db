import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { logger } from "redux-logger";

const initialState = {};

const middleware = [thunk, logger];

// const store = createStore(
//   rootReducer,
//   initialState,
//   compose(
//     applyMiddleware(...middleware),
//     window.navigator.userAgent.includes("Chrome")
//       ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
//         window.__REDUX_DEVTOOLS_EXTENSION__()
//       : compose
//   )
// );

const store = createStore(
  rootReducer,
  initialState,

  applyMiddleware(...middleware)
);
export default store;
