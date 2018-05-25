import history from "./../history";
var config = require("./../config.json");
//action  types  (constants)
export const TEST_ACTION = "TEST_ACTION";
export const BACKWARDS = "BACKWARDS";
export const FORWARDS = "FORWARDS";
export const RECEIVE_LIST = "RECEIVE_LIST";
export const REQUEST_LIST = "REQUEST_LIST";
export const RECEIVE_TO_WATCH_LIST = "RECEIVE_TO_WATCH_LIST";

//other constants (api url ie.)
const WatchedList = "https://api.themoviedb.org/4/list/51869?page=1&" + config.apikey;
const ToWatchList = "https://api.themoviedb.org/4/list/63058?page=1&" + config.apikey;

// Action to fetch  a LIST

function requestList() {
  return {
    type: REQUEST_LIST
  };
}

export const toWatchList = () => dispatch => {
  fetch(ToWatchList)
    .then(res => res.json())
    .then(result =>
      dispatch({
        type: RECEIVE_TO_WATCH_LIST,
        payload: result
      })
    );
};

export const fetchPosts = () => dispatch => {
  dispatch(requestList());
  return fetch(WatchedList)
    .then(res => res.json())
    .then(result => {
      setTimeout(() => {
        dispatch({
          type: RECEIVE_LIST,
          payload: result
        });
      }, 2000);
    });
};

// Get IMDB id

export const testAction = () => (dispatch, getState, payload) => {
  if (history.location.pathname === "/") {
    let lenght = getState().watched.total_results;
    dispatch({
      type: TEST_ACTION,
      payload: lenght
    });
  } else if (history.location.pathname === "/wanttowatch") {
    let lenght = getState().toWatch.total_results;
    dispatch({
      type: TEST_ACTION,
      payload: lenght
    });
  } else {
  }

  return dispatch(handleForward());
};

export const handleForward = payload => ({
  type: FORWARDS,
  payload: 1
});

export const handleBackward = payload => ({
  type: BACKWARDS,
  payload: 1
});
