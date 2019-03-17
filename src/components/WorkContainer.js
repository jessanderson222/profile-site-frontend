import React, { Component } from "react";
import OpenHouse from "./OpenHouse";
import JetSettr from "./JetSettr";
import YellowPages from "./YellowPages";

class WorkContainer extends Component {
  render() {
    return (
      <div>
        <OpenHouse />
        <JetSettr />
        <YellowPages />
      </div>
    );
  }
}

export default WorkContainer;
