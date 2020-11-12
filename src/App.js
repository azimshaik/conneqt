import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import "./App.css";

const axios = require("axios");

function App() {
  return (
    <Router>
      {/* <div className="container">Hello World</div> */}
      <div className="container">
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
