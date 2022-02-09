import React, { Component } from "react";
import NAV from "../pages/NAV";
import Home from "../pages/home";
import { Switch, Route } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div className="app">
        <NAV />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}
