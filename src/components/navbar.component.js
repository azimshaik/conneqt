import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark box-shadow">
        <Link
          to="/"
          className="navbar-brand"
          style={{
            color: "white",
          }}
        >
          Bank
        </Link>
      </nav>
    );
  }
}
