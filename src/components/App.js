import React, { Component } from "react";
import ContentContainer from "./ContentContainer";
import "./App.css";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContentContainer />

        <Switch>
          <Route
            path="/twitter"
            component={() => {
              window.location = "https://twitter.com/jessay22";
              return null;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
