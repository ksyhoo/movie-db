import React, { Component } from "react";
var config = require("./../../../config.json");

class GetCrew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {}
    };
    this.getCrewDetails = this.getCrewDetails.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const CrewDetails =
      "https://api.themoviedb.org/3/movie/" +
      nextProps.getMovieDetails +
      "/credits?" +
      config.apikey +
      "&language=en-US";
    fetch(CrewDetails)
      .then(response => response.json())
      .then(data => {
        this.setState({
          details: data
        });
      });
  }

  componentWillMount() {
    this.getCrewDetails();
  }

  // get order from 0 to 5 OR   first 5 in order
  getCrewDetails() {
    const CrewDetails =
      "https://api.themoviedb.org/3/movie/" +
      this.props.getMovieDetails +
      "/credits?" +
      config.apikey +
      "&language=en-US";
    fetch(CrewDetails)
      .then(response => response.json())
      .then(data => {
        this.setState({
          details: data
        });
      });
  }

  render() {
    if (!this.state.details.cast) return null;
    let crew = this.state.details.cast.map((cast, i) => {
      let crewImg = "https://image.tmdb.org/t/p/w138_and_h175_face/" + cast.profile_path;
      if (cast.order >= 0 && cast.order < 5) {
        return (
          <div key={i}>
            <p className="cast-name"> {cast.name}</p>
            <p className="cast-character"> ({cast.character})</p>
            <img src={crewImg} alt="No img" />
          </div>
        );
      }
      return null;
    });

    return <div className="actor-details">{crew}</div>;
  }
}

export default GetCrew;
