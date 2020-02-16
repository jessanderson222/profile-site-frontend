import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

class SocialContainer extends Component {
  handleTwitterButtonClick = e => {
    e.preventDefault();

    this.props.history.push("/twitter");
  };

  handleLinkedinButtonClick = e => {
    e.preventDefault();

    this.props.history.push("/linkedin");
  };

  handleGithubButtonClick = e => {
    e.preventDefault();

    this.props.history.push("/github");
  };

  handleMediumButtonClick = e => {
    e.preventDefault();

    this.props.history.push("/medium");
  };

  render() {
    console.log(this.state);

    return (
      <div className="navbar-parent">
        <div className="navbar">
          <div className="social">
            <Button icon onClick={this.handleTwitterButtonClick}>
              <Icon name="twitter" />
            </Button>{" "}
          </div>
          <br />
          <div className="social">
            <Button
              name="linkedinButtonClick"
              icon
              onClick={this.handleLinkedinButtonClick}
            >
              <Icon name="linkedin" />
            </Button>{" "}
          </div>
          <br />
          <div className="social" onClick={this.handleGithubButtonClick}>
            <Button icon>
              <Icon name="github" />
            </Button>
          </div>
          <br />
          <div className="social" onClick={this.handleMediumButtonClick}>
            <Button icon>
              <Icon name="medium" />
            </Button>{" "}
          </div>
          <br />
          <h4 className="nav-text" id="hello">
            <a className="link" href="/">
              Hello
            </a>
          </h4>
          <h4 className="nav-text" id="about-me">
            <a className="link" href="/about">
              About Me
            </a>
          </h4>
          <h4 className="nav-text" id="work">
            <a className="link" href="/work">
              Work
            </a>
          </h4>
          <p className="nav-subhead">
            <a className="link" href="/openhouse">
              OpenHouse
            </a>
          </p>
          <p className="nav-subhead">
            <a className="link" href="/jetsettr">
              JetSettr
            </a>
          </p>
          <p className="nav-subhead">
            <a className="link" href="/theyellowpages">
              The Yellow Pages
            </a>
          </p>
          <h4 className="nav-text" id="resume">
            <a className="link" href="/resume">
              Resume
            </a>
          </h4>
        </div>
      </div>
    );
  }
}

export default withRouter(SocialContainer);
