import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import SearchResults from "./search/SearchResults";
import RecommendedList from "./search/RecommendedList";
import React, { Component } from "react";
var config = require("./../../config.json");

class Search extends Component {
  state = {
    searchText: "",
    movies: [],
    recommendations: []
  };

  componentDidMount = () => {
    fetch("https://secure-hollows-13744.herokuapp.com/api/get_recommendations ")
      .then(response => response.json())
      .then(result => {
        this.setState({
          recommendations: result
        });
        console.log(this.state.recommendations);
      });
  };

  onTextChange = e => {
    let val = e.target.value;
    this.setState({ [e.target.name]: val }, () => {
      if (val === "") {
        this.setState({ movies: [] });
      } else {
        fetch(
          "https://api.themoviedb.org/3/search/movie?" +
            config.apikey +
            "&language=en-US&include_adult=false&query=" +
            this.state.searchText
        )
          .then(response => response.json())
          .then(data => {
            this.setState({
              movies: data.results
            });
            console.log(this.state.movies);
          });
      }
    });
  };

  render() {
    return (
      <MuiThemeProvider>
        <div className="search">
          {this.state.recommendations.length > 0 ? (
            <RecommendedList movies={this.state.recommendations} />
          ) : (
            <div className="spinner">
              <div class="bounce1" />
              <div class="bounce2" />
              <div class="bounce3" />
            </div>
          )}
          <TextField
            name="searchText"
            value={this.state.searchText}
            onChange={this.onTextChange}
            hintStyle={{ textAlign: "center", width: "100%" }}
            hintText="Search for movies"
            fullWidth={true}
            inputStyle={{ textAlign: "center" }}
          />
          <br />
          {this.state.movies.length > 0 ? <SearchResults movies={this.state.movies} /> : null}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Search;
