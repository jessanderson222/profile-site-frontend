import React, { Component } from "react";
import BioContainer from "./BioContainer";
import WorkContainer from "./WorkContainer";
import NavBar from "./NavBar";

class ContentContainer extends Component {
  render() {
    return (
      <div id="content-div">
        <div className="container">
          <BioContainer />
        </div>
        <div className="container">
          <WorkContainer />
        </div>
        <div className="container">
          <NavBar />
        </div>
      </div>
    );
  }
}

export default ContentContainer;
