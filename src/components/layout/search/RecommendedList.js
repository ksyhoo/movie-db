import React, { Component } from "react";
import { GridList, GridTile } from "material-ui/GridList";

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  gridList: {
    display: "flex",
    flexWrap: "nowrap",
    overflowX: "auto"
  },
  titleStyle: {
    color: "white",
    fontWeight: "700"
  }
};

class RecommendedList extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onMouseWheel = this.onMouseWheel.bind(this);
  }

  onMouseWheel(e) {
    //scrol to implement
  }

  render() {
    const { movies } = this.props;
    let moviesList;

    if (movies) {
      moviesList = (
        <div style={styles.root} className="wrapper-search" onWheel={this.onMouseWheel}>
          <GridList style={styles.gridList} cols={3}>
            {movies.map(movie => (
              <GridTile
                key={movie.id}
                title={movie.title.toUpperCase()}
                titleStyle={styles.titleStyle}
                titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              >
                <img
                  src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2" + movie.poster_path}
                  alt="no img"
                />
              </GridTile>
            ))}
          </GridList>
        </div>
      );
    } else {
      moviesList = null;
    }

    return (
      <div className="container-cast dialog">
        <h2>Movies Recomended by Users</h2>
        {moviesList}
        <h2>Search below for a movie to recommend</h2>
      </div>
    );
  }
}

export default RecommendedList;
