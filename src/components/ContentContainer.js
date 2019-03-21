import React, { Component } from "react";
import BioContainer from "./BioContainer";
import WorkContainer from "./WorkContainer";

class ContentContainer extends Component {
  render() {
    return (
      <div className="content">
        <div className="container" />
        <div id="main">
          <div className="container">
            <BioContainer />
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
