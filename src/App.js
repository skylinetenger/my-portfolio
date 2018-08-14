import React, { Component } from "react";
import "./css/main.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/work" exact component={Work} />
          <Route path="/contact" exact component={Contact} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
