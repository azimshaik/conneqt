import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg"
        style={{
          backgroundColor: "#900707",
          color: "white",
        }}
      >
        <Link
          to="/"
          className="navbar-brand"
          style={{
            color: "white",
          }}
        >
          Bank
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link
                to="/profile"
                className="nav-link"
                style={{
                  color: "white",
                }}
              >
                Profile
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/updateprofile"
                className="nav-link"
                style={{
                  color: "white",
                }}
              >
                Update
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/user"
                className="nav-link"
                style={{
                  color: "white",
                }}
              >
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
