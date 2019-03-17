import React, { Component } from "react";

class SocialContainer extends Component {
  render() {
    return (
      <div>
        <button className="social">Twitter</button>
        <button className="social">LinkedIn</button>
        <button className="social">GitHub</button>
        <button className="social">Email</button>
        <h4 className="nav-text">Work</h4>
      </div>
    );
  }
}

export default SocialContainer;
