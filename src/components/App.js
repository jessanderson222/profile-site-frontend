import React, { Component } from "react";
import ContentContainer from "./ContentContainer";
import "./App.css";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import NavBar from "./NavBar";
import Hello from "./Hello";
import AboutMe from "./AboutMe";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {/* <ContentContainer /> */}

        <Switch>
          <Route
            path="/twitter"
            component={() => {
              window.location = "https://twitter.com/jessay22";
              return null;
            }}
          />
          <Route
            path="/linkedin"
            component={() => {
              window.location = "https://www.linkedin.com/in/jessie-anderson/";
              return null;
            }}
          />
          <Route
            path="/github"
            component={() => {
              window.location = "https://github.com/jessanderson222";
              return null;
            }}
          />

          <Route path="/about" render={() => <AboutMe />} />

          <Route path="/" render={() => <Hello />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
