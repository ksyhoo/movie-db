import React, { Component } from "react";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import ZoomIn from "material-ui/svg-icons/action/zoom-in";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";

export default class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      poster: "",
      description: "",
      title: "",
      id: 0,
      recomendations: {},
      saved: false,
      duplicate: false
    };
  }

  handleOpen = (movie, description, title, id) => {
    this.setState({
      open: true,
      poster: movie,
      description: description,
      title: title,
      id: id
    });
  };

  handleClose = () => {
    this.setState({ open: false, saved: false, duplicate: false });
  };

  handleRecommendNotify = () => {
    alert("saved");
  };

  handleRecomend = () => {
    fetch("https://secure-hollows-13744.herokuapp.com/api/recommend", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: this.state.title,
        poster_path: this.state.poster,
        overview: this.state.description,
        id: this.state.id
      })
    }).then(response => {
      if (response.ok) {
        this.setState({ saved: true });
      } else this.setState({ duplicate: true });
    });
  };

  render() {
    let moviesList;
    const { movies } = this.props;
    const windowWidth = window.innerWidth;
    let colAmmount;
    // if(windowWidth<1030){
    //   colAmmount=1
    // }
    // else {
    //   colAmmount=4

    // }

    console.log(windowWidth);

    if (movies) {
      if (windowWidth < 1030) {
        colAmmount = 1;
      } else {
        colAmmount = 4;
      }
      moviesList = (
        <div className="wrapper-search">
          <GridList cols={colAmmount} style={{ height: "100%", backgroundColor: "#F4F4F4" }}>
            {movies.map(movie => (
              <GridTile
                title={movie.title}
                key={movie.id}
                subtitle={
                  <span>
                    <strong>{movie.release_date.slice(0, 4)}</strong>
                  </span>
                }
                actionIcon={
                  <IconButton
                    onClick={() =>
                      this.handleOpen(movie.poster_path, movie.overview, movie.title, movie.id)
                    }
                  >
                    <ZoomIn color="white" />
                  </IconButton>
                }
              >
                <img
                  src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2" + movie.poster_path}
                  alt=""
                />
              </GridTile>
            ))}
          </GridList>
        </div>
      );
    } else {
      moviesList = null;
    }

    const actions = [
      <FlatButton label="Close" primary={true} onClick={this.handleClose} />,
      <FlatButton label="Recommend" primary={true} onClick={this.handleRecomend} />
    ];

    const NotificationActions = [
      <FlatButton label="Close" primary={true} onClick={this.handleClose} />
    ];

    let succesNotification;

    if (this.state.saved) {
      succesNotification = (
        <div>
          <Dialog
            actions={NotificationActions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
            autoDetectWindowHeight={true}
            autoScrollBodyContent={false}
            style={{ textAlign: "center" }}
          >
            {" "}
            Thank you for your recommendation!{" "}
          </Dialog>
        </div>
      );
    }
    let failureNotification;
    if (this.state.duplicate) {
      failureNotification = (
        <div>
          <Dialog
            actions={NotificationActions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
            autoDetectWindowHeight={true}
            autoScrollBodyContent={false}
            style={{ textAlign: "center" }}
          >
            {" "}
            Movie already recommended, try something else!{" "}
          </Dialog>
        </div>
      );
    }

    return (
      <div>
        {moviesList}
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoDetectWindowHeight={true}
          autoScrollBodyContent={false}
          style={{ textAlign: "center" }}
        >
          {succesNotification}
          {failureNotification}

          <div className="dialog">
            <h5>{this.state.title}</h5>
            <p>{this.state.description}</p>
            <img
              src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2" + this.state.poster}
              alt=""
              style={{ width: "100%" }}
            />
          </div>
        </Dialog>
      </div>
    );
  }
}
