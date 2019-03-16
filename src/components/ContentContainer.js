import React, { Component } from "react";
import BioContainer from "./BioContainer";
import WorkContainer from "./WorkContainer";
import SocialContainer from "./SocialContainer";

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
          <SocialContainer />
        </div>
      </div>
    );
  }
}

export default ContentContainer;
