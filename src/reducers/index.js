import { combineReducers } from "redux";
import getMovieList from "./fetchMovies";
import getToWatchMovieList from "./fetchToWatchMovies";

import handleNav from "./handleNav";

export default combineReducers({
  watched: getMovieList,
  toWatch: getToWatchMovieList,
  watchedIndex: handleNav
});
