import { FORWARDS, BACKWARDS, TEST_ACTION } from "../actions/fetchLists";
import history from "./../history";

export default function handleNav(
  state = { lenght: 0, currentIndex: 0, toWatchIndex: 0 },
  action
) {
  switch (action.type) {
    case TEST_ACTION:
      return Object.assign({}, state, { lenght: action.payload });

    case FORWARDS:
      if (
        state.currentIndex < state.lenght - 1 &&
        history.location.pathname === "/"
      ) {
        return Object.assign({}, state, {
          currentIndex: state.currentIndex + action.payload
        });
      }
      if (
        state.toWatchIndex < state.lenght - 1 &&
        history.location.pathname === "/wanttowatch"
      ) {
        return Object.assign({}, state, {
          toWatchIndex: state.toWatchIndex + action.payload
        });
      } else
        return Object.assign({}, state, { currentIndex: state.lenght - 1 });

    case BACKWARDS:
      if (state.currentIndex > 0 && history.location.pathname === "/") {
        return Object.assign({}, state, {
          currentIndex: state.currentIndex - action.payload
        });
      }
      if (
        state.toWatchIndex > 0 &&
        history.location.pathname === "/wanttowatch"
      ) {
        return Object.assign({}, state, {
          toWatchIndex: state.toWatchIndex - action.payload
        });
      } else
        return Object.assign({}, state, { currentIndex: 0, toWatchIndex: 0 });

    default:
      return state;
  }
}
