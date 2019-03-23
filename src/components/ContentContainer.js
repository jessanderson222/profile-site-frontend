import React, { Component } from "react";
import Hello from "./Hello";
import WorkContainer from "./WorkContainer";

class ContentContainer extends Component {
  render() {
    return (
      <div className="content">
        <div className="container" />
        <div id="main">
          <div className="container">
            <Hello />
          </div>
          <div className="container">
            <WorkContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default ContentContainer;
