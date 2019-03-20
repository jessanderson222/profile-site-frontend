import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";

class SocialContainer extends Component {
  render() {
    return (
      <div>
        <Button icon>
          <Icon name="twitter" />
        </Button>
        <Button icon>
          <Icon name="linkedin" />
        </Button>
        <Button icon>
          <Icon name="github" />
        </Button>
        <Button icon>
          <Icon name="envelope" />
        </Button>
        <h4 className="nav-text">Work</h4>
      </div>
    );
  }
}

export default SocialContainer;
