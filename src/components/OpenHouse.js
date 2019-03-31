import React, { Component } from "react";
import gif from "./gif.gif";

class OpenHouse extends Component {
  render() {
    return (
      <div>
        <h1>OpenHouse</h1>
        <img src={gif} alt="loading..." />
      </div>
    );
  }
}

export default OpenHouse;
