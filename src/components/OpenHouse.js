import React, { Component } from "react";
import gif from "./gif.gif";
import { Redirect } from "react-router-dom";

class OpenHouse extends Component {
  state = {
    frontEndClick: false,
    backEndClick: false
  };

  handleFrontEndClick = e => {
    e.preventDefault();
    this.setState({
      frontEndClick: !this.state.frontEndClick
    });
  };

  handleBackEndClick = e => {
    e.preventDefault();
    this.setState({
      backEndClick: !this.state.backEndClick
    });
  };

  render() {
    if (this.state.frontEndClick) {
      return <Redirect to="/openhousefrontend" target="/blank" />;
    } else if (this.state.backEndClick) {
      return <Redirect to="/openhousebackend" target="/blank" />;
    } else {
      return (
        <div className="projectTitle">
          <h1 className="project-name">OpenHouse</h1>
          <br />
          <p className="project-description">
            An app for apartment seekers to find the perfect match. The renter
            used flow allows people to view available apartments that match
            their criteria, while the agent account allows real estate brokers
            to post properties.
          </p>
          <p className="technologies-used">
            <h4>Technologies Used</h4>
            React-Redux <br />
            JavaScript <br />
            Ruby on Rails <br />
            PostgreSQL <br />
            CSS <br />
            HTML <br />
            Authentication
          </p>
          <p className="gitHub">
            <h4>GitHub</h4>
            <p onClick={this.handleFrontEndClick}>Front End</p> <br />
            <p onClick={this.handleBackEndClick}>Back end</p>
          </p>
          <img className="openHouse-gif" src={gif} alt="loading..." />
        </div>
      );
    }
  }
}

export default OpenHouse;
