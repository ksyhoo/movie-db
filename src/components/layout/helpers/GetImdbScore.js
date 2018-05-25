import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
var config = require("./../../../config.json");

class GetImdbScore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {}
    };
    this.getImdbid = this.getImdbid.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    let MovieDetails =
      "https://api.themoviedb.org/3/movie/" +
      nextProps.getMovieDetails +
      "?" +
      config.apikey +
      "&language=en-US";

    fetch(MovieDetails)
      .then(response => response.json())
      .then(data => {
        this.setState({
          details: data
        });
      });
  }

  componentWillMount() {
    this.getImdbid();
  }

  getImdbid() {
    let MovieDetails =
      "https://api.themoviedb.org/3/movie/" +
      this.props.getMovieDetails +
      "?" +
      config.apikey +
      "&language=en-US";

    fetch(MovieDetails)
      .then(response => response.json())
      .then(data => {
        this.setState({
          details: data
        });
      });
  }

  render() {
    if (!this.props.getMovieDetails) return null;

    const a = () => {
      if (!this.state.details.homepage) {
        return "No info";
      } else return this.state.details.homepage;
    };

    const imdbLink = "https://www.imdb.com/title/" + this.state.details.imdb_id;

    return (
      <div className="get-imdb-score">
        <img src={require("./../static/imdb.png")} alt="" />
        <a href={imdbLink}> Imdb</a>{" "}
        <i className="fa fa-home">
          {" "}
          <a href={a()}> Homepage </a>
        </i>
        <br />
      </div>
    );
  }
}

export default GetImdbScore;
