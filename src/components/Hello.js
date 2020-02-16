import React, { Component } from "react";

class Hello extends Component {
  render() {
    return (
      <div className="hello">
        <p className="hello-title">Hello.</p>
        <div className="text">
          <p>
            I'm Jessie Anderson, a software engineer based out of New York City.
          </p>
          <p>
            I am currently working at VTS, a unicorn company shaping the future
            of proptech.
          </p>
          <p>I am also an illustrator, baker, skiier, and museum enthusiast.</p>
        </div>
      </div>
    );
  }
}

export default Hello;
