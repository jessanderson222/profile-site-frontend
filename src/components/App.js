import React, { Component } from "react";
import WorkContainer from "./WorkContainer";
import "./App.css";
import { Route, Switch, withRouter } from "react-router-dom";
import NavBar from "./NavBar";
import ContentContainer from "./ContentContainer";
import AboutMe from "./AboutMe";
import OpenHouse from "./OpenHouse";
import JetSettr from "./JetSettr";
import YellowPages from "./YellowPages";
import Resume from "./Resume";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />

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
          <Route
            path="/medium"
            component={() => {
              window.location = "https://medium.com/@jessanderson222";
              return null;
            }}
          />
          <Route
            path="/openhousefrontend"
            component={() => {
              window.location =
                "https://github.com/jessanderson222/open_house_frontend";
              return null;
            }}
          />
          <Route
            path="/openhousebackend"
            component={() => {
              window.location =
                "https://github.com/jessanderson222/openHouse_backend";
              return null;
            }}
          />
          <Route
            path="/jetsettrbackend"
            component={() => {
              window.location =
                "https://github.com/jessanderson222/jetsettr-backend";
              return null;
            }}
          />
          <Route
            path="/jetsettrfrontend"
            component={() => {
              window.location =
                "https://github.com/jessanderson222/jetsettr_frontend";
              return null;
            }}
          />
          <Route
            path="/yellowpages"
            component={() => {
              window.location =
                "https://github.com/jessanderson222/mod-2-project";
              return null;
            }}
          />
          <Route path="/about" render={() => <AboutMe />} />
          <Route path="/resume" render={() => <Resume />} />
          <Route path="/work" render={() => <WorkContainer />} />
          <Route path="/openhouse" render={() => <OpenHouse />} />
          <Route path="/jetsettr" render={() => <JetSettr />} />
          <Route path="/theyellowpages" render={() => <YellowPages />} />
          <Route path="/" render={() => <ContentContainer />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
