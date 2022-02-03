import React, { Component } from "react";
import NAV from "../pages/NAV";
import Home from "../pages/home";
export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Homepage</h1>
        <h2>Navigation Bar</h2>
        <NAV />
        <Home />
      </div>
    );
  }
}
