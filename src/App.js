import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import Profile from "./components/profile.component";
import axios from "axios";
import "./App.css";

function App() {
  return (
    <Router>
      {/* <div className="container">Hello World</div> */}
      <div className="container">
        <Navbar />
        <Route path="/" component={Profile} />
      </div>
    </Router>
  );
}

export default App;
