import React from "react";
import history from "./../../history";
import GetImdbScore from "./helpers/GetImdbScore";
import GetCrew from "./helpers/GetCrew";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { handleForward, handleBackward, testAction } from "../../actions/fetchLists";

const Carousel2 = props => {
  console.log(history.location.pathname);

  const backgroundImageCarousel =
    "https://image.tmdb.org/t/p/w1400_and_h450_face" + props.movies.backdrop_path;
  const style = { backgroundImage: "url(" + backgroundImageCarousel + ")" };
  const forgroundImage =
    "https://image.tmdb.org/t/p/w300_and_h450_bestv2" + props.movies.poster_path;
  const year = props.movies.release_date.slice(0, 4);

  return (
    <div>
      <div className="container" style={style}>
        <div className="custom-bg" />
      </div>

      {/* <div>
        <button className="arrow right" onClick={props.testAction}>
          <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="80px" viewBox="0 0 50 80">
            <polyline
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              points="	0.375,0.375 45.63,38.087 0.375,75.8 "
            />
          </svg>
        </button>
      </div> */}

      <div className="wrapper">
        <div className="grid-container">
          <button className="arrow left " onClick={props.handleBackward}>
            <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="80px" viewBox="0 0 50 80">
              <polyline
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="45.63,75.8 0.375,38.087 45.63,0.375 "
              />
            </svg>
          </button>

          <div className="grid-item">
            <img src={forgroundImage} alt="" />
          </div>
          <div className="grid-item">
            <p className="title">
              {props.movies.title} <span className="year">({year})</span>
            </p>
            <p className="description">Description :</p>
            <p>{props.movies.overview}</p>
            <p className="score">
              Score: {props.movies.vote_average} ( {props.movies.vote_count} votes )
            </p>
            <GetImdbScore getMovieDetails={props.movies.id} />
          </div>

          <button className="arrow right" onClick={props.testAction}>
            <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="80px" viewBox="0 0 50 80">
              <polyline
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="	0.375,0.375 45.63,38.087 0.375,75.8 "
              />
            </svg>
          </button>
        </div>
      </div>

      {/* <div>
        <button className="arrow left" onClick={props.handleBackward}>
          <svg width="60px" height="80px" viewBox="0 0 50 80">
            <polyline
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              points="45.63,75.8 0.375,38.087 45.63,0.375 "
            />
          </svg>
        </button>
      </div> */}
      <div className="container-cast">
        <div className="wrapper-cast">
          <GetCrew getMovieDetails={props.movies.id} />
        </div>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      handleForward: handleForward,
      handleBackward: handleBackward,
      testAction: testAction
    },
    dispatch
  );
}
export default withRouter(connect(null, mapDispatchToProps)(Carousel2));
