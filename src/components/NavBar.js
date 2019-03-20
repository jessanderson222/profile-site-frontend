import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";

class SocialContainer extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="social">
          <Button icon>
            <Icon name="twitter" />
          </Button>{" "}
        </div>
        <br />
        <div className="social">
          <Button icon>
            <Icon name="linkedin" />
          </Button>{" "}
        </div>
        <br />
        <div className="social">
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
          Hello
        </h4>
        <h4 className="nav-text" id="about-me">
          About Me
        </h4>
        <h4 className="nav-text" id="work">
          Work
        </h4>
      </div>
    );
  }
}

export default SocialContainer;
