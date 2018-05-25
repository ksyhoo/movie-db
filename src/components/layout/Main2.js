import React from "react";
import Carousel2 from "./Carousel2";
import Search from "./Search";
import history from "../../history";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Main2 = props => {
  if (!props.movie || !props.toWatchMovie) {
    return <p>loading</p>;
  }
  return (
    <main>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Carousel2 movies={props.movie[props.watchedIndex]} />}
        />
        <Route
          path="/wanttowatch"
          render={() => <Carousel2 movies={props.toWatchMovie[props.toWatchIndex]} />}
        />
        <Route path="/search" render={() => <Search />} />
      </Switch>
    </main>
  );
};

const mapStateToProps = state => ({
  movie: state.watched.results,
  toWatchMovie: state.toWatch.results,
  watchedIndex: state.watchedIndex.currentIndex,
  toWatchIndex: state.watchedIndex.toWatchIndex
});

export default withRouter(connect(mapStateToProps)(Main2));

export function main(loc) {
  history.push(loc);
}
