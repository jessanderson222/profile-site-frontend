import React, { Component } from "react";
import yellowpages from "./yellowpages.gif";

class YellowPages extends Component {
  render() {
    return (
      <div>
        <div className="projectTitle">
          <h1 className="project-name">The Yellow Pages</h1>
          <br />
          <p className="project-description">
            A social media marketplace to buy and sell stuff. Facebook
            Marketplace meets Craigslist to create an easy to use platform.
          </p>
          <p className="technologies-used">
            <h4>Technologies Used</h4>
            Ruby on Rails <br />
            CSS <br />
            Bootstrap
          </p>
          <p className="gitHub">
            <h4>GitHub</h4>
          </p>
          <img className="openHouse-gif" src={yellowpages} alt="loading..." />
        </div>
      </div>
    );
  }
}

export default YellowPages;
