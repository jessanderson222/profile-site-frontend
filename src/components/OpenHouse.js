import React, { Component } from "react";
import gif from "./gif.gif";

class OpenHouse extends Component {
  render() {
    return (
      <div className="openHouse">
        <h1 className="project-name">OpenHouse</h1>
        <br />
        <p className="project-description">
          An app for apartment seekers to find the perfect match. The renter
          used flow allows people to view available apartments that match their
          criteria, while the agent account allows real estate brokers to post
          properties.
        </p>
        <p className="technologies-used">
          <h4>Technologies Used</h4>
          React-Redux <br />
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
        <img className="openHouse-gif" src={gif} alt="loading..." />
      </div>
    );
  }
}

export default OpenHouse;
