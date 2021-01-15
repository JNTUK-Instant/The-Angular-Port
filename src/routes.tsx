import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main0 from "./main";
import About from "./about";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main0 />
        </Route>
        <Route path="/about.html">
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
