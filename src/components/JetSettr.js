import React, { Component } from "react";
import jetsettr from "./jetsettr.gif";

class JetSettr extends Component {
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
            Front End <br />
            Back end
          </p>
          <img className="openHouse-gif" src={jetsettr} alt="loading..." />
        </div>
      </div>
    );
  }
}

export default JetSettr;
