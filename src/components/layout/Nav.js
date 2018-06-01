import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
  <nav className="nav">
    <ul>
      <li>
        <Link to="/">Recently Watched</Link>
      </li>
      <li>
        <Link to="/wanttowatch">Want to Watch</Link>
      </li>
      <li>
        <Link to="/search">Search</Link>
      </li>
      <li>
        {" "}
        <img className="logo" src={require("./static/powered2.png")} alt="" height="80px" />
      </li>
    </ul>
  </nav>
);
export default Nav;
