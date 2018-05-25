import { RECEIVE_TO_WATCH_LIST, REQUEST_LIST } from "../actions/fetchLists";

export default function getToWatchMovieList(state = {}, action) {
  switch (action.type) {
    case REQUEST_LIST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_TO_WATCH_LIST:
      return Object.assign({}, state, action.payload, {
        isFetching: false
      });

    default:
      return state;
  }
}
