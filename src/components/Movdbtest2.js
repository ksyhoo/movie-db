import React, { Component } from "react";
import Nav from "./layout/Nav";
import Main2 from "./layout/Main2";
import Footer from "./layout/Footer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { bindActionCreators } from "redux";
import { fetchPosts, toWatchList } from "../actions/fetchLists";

class Movdbtest2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: true
    };
  }

  componentDidMount() {
    this.props.fetchPosts();
    this.props.toWatchList();
  }

  render() {
    if (this.props.isFetchingWatched || this.props.isFetchingtoWatch) {
      return (
        <div>
          <Nav />
          <div className="spinner">
            <div class="bounce1" />
            <div class="bounce2" />
            <div class="bounce3" />
          </div>
          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <Nav />
          <Main2 />
          <Footer />
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  isFetchingWatched: state.watched.isFetching,
  isFetchingtoWatch: state.toWatch.isFetching
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts: fetchPosts, toWatchList: toWatchList }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Movdbtest2));
