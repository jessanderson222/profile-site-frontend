import React, { Component } from "react";
import Hello from "./Hello";
import AboutMe from "./AboutMe";
import WorkContainer from "./WorkContainer";
import Resume from "./Resume";

class ContentContainer extends Component {
  render() {
    return (
      <div className="contentDiv">
        <Hello />
        <AboutMe />
        <WorkContainer />
        <Resume />
      </div>
    );
  }
}

export default ContentContainer;
