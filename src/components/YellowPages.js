import React, { Component } from "react";
import yellowpages from "./yellowpages.gif";
import { Route, Switch, withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";

class YellowPages extends Component {
  handleGithubClick = e => {
    e.preventDefault();
    this.props.history.push("/yellowpages");
  };

  handleLiveClick = e => {
    e.preventDefault();
    this.props.history.push("/liveyellowpages");
  };

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
            <h4 onClick={this.handleLiveClick}>Live</h4>
            <h4 onClick={this.handleGithubClick}>GitHub</h4>
          </p>
          <img className="openHouse-gif" src={yellowpages} alt="loading..." />
        </div>
      </div>
    );
  }
}

export default withRouter(YellowPages);
