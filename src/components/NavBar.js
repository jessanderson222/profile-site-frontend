import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";

class SocialContainer extends Component {
  render() {
    return (
      <div className="navbar">
        <Button icon className="social">
          <Icon name="twitter" />
        </Button>{" "}
        <br />
        <Button icon className="social">
          <Icon name="linkedin" />
        </Button>{" "}
        <br />
        <Button icon className="social">
          <Icon name="github" />
        </Button>{" "}
        <br />
        <Button icon className="social">
          <Icon name="envelope" />
        </Button>{" "}
        <br />
        <h4 className="nav-text">Work</h4>
      </div>
    );
  }
}

export default SocialContainer;
