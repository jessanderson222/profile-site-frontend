import React, { Component } from "react";
import Hello from "./Hello";
import WorkContainer from "./WorkContainer";
import Resume from "./Resume";

class ContentContainer extends Component {
  render() {
    return (
      <div className="contentDiv">
        <Hello />
        <WorkContainer />
        {/* <Resume /> */}
      </div>
    );
  }
}

export default ContentContainer;
