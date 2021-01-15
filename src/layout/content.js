//import React from 'react';
import "./content.css";
import react from "react";
import Main0 from "../main";
import About from "../about";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Content0 extends react.Component {
  render() {
    return (
      <main>
        <Router>
          <Switch>
            <Route exact path="/">
              <Main0 />
            </Route>
            <Route path="/about.html">
              <About />
            </Route>
          </Switch>
        </Router>
      </main>
    );
  }
}

export default Content0;
//use classes and objects
