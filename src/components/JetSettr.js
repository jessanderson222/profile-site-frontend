import React, { Component } from "react";
import jetsettr from "./jetsettr.gif";
import { Redirect } from "react-router-dom";
import { Route, Switch, withRouter } from "react-router-dom";

class JetSettr extends Component {
  handleFrontEndClick = e => {
    e.preventDefault();
    this.props.history.push("/jetsettrfrontend");
  };
  handleBackEndClick = e => {
    e.preventDefault();
    this.props.history.push("/jetsettrbackend");
  };

  render() {
    return (
      <div>
        <div className="projectTitle">
          <h1 className="project-name">JetSettr</h1>
          <br />
          <p className="project-description">
            A crowd-sourced review forum to help users choose their next travel
            destination. View reviews left by others or leave your own.
          </p>
          <p className="technologies-used">
            <h4>Technologies Used</h4>
            React <br />
            JavaScript <br />
            Ruby on Rails <br />
            PostgreSQL <br />
            CSS <br />
            HTML
          </p>
          <p className="gitHub">
            <h4>GitHub</h4>
            <p onClick={this.handleFrontEndClick}>Front End</p>
            <p onClick={this.handleBackEndClick}>Back end</p>
          </p>
          <img className="openHouse-gif" src={jetsettr} alt="loading..." />
        </div>
      </div>
    );
  }
}

export default withRouter(JetSettr);
