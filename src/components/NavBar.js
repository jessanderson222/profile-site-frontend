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
        <h4 className="work-nav" id="work-nav-div">
          Work
        </h4>
      </div>
    );
  }
}

export default SocialContainer;
