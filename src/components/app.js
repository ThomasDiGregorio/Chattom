import React, { Component } from "react";
import NAV from "../pages/NAV";
import Home from "../pages/home";
import Auth from "../pages/auth";
import { Switch, Route } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div className="app">
        <NAV />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Authentication" component={Auth} />
        </Switch>
      </div>
    );
  }
}
