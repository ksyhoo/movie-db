import { REQUEST_LIST, RECEIVE_LIST } from "../actions/fetchLists";

export default function getMovieList(state = {}, action) {
  switch (action.type) {
    case REQUEST_LIST:
      return Object.assign({}, ...state, {
        isFetching: true
      });
    case RECEIVE_LIST:
      return Object.assign({}, ...state, action.payload, {
        isFetching: false
      });

    default:
      return state;
  }
}
