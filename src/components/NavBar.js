import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";
import { Redirect } from "react-router-dom";

class SocialContainer extends Component {
  state = {
    twitterButtonClick: false,
    linkedinButtonClick: false,
    githubButtonClick: false
  };

  handleTwitterButtonClick = e => {
    e.preventDefault();
    this.setState({
      twitterButtonClick: !this.state.twitterButtonClick
    });
  };

  handleLinkedinButtonClick = e => {
    e.preventDefault();
    this.setState({
      linkedinButtonClick: !this.state.linkedinButtonClick
    });
  };

  handleGithubButtonClick = e => {
    e.preventDefault();
    this.setState({
      githubButtonClick: !this.state.githubButtonClick
    });
  };

  render() {
    console.log(this.state);
    if (this.state.twitterButtonClick === true) {
      return <Redirect to="/twitter" target="/blank" />;
    } else if (this.state.linkedinButtonClick === true) {
      return <Redirect to="/linkedin" target="/blank" />;
    } else if (this.state.githubButtonClick === true) {
      return <Redirect to="/github" target="/blank" />;
    } else {
      return (
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
          <div className="social">
            <Button icon>
              <Icon name="envelope" />
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
        </div>
      );
    }
  }
}

export default SocialContainer;
