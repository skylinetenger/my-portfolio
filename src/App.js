import React, { Component } from "react";
import "./css/main.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
