import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <input>Search Bar</input>
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        <input>Button</input>
        <FontAwesomeIcon icon="fa-duotone fa-house-chimney" />
      </div>
    );
  }
}
