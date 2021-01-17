//import React from "react";
import "./styles/header.css";
import "./styles/content.css";
import "./styles/index.css";
import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import Main0 from "./pages/main";
import About from "./pages/about";

function HeadBar() {
  return (
    <header>
      <div className="logo_block header_floats">
        <div className="top-logo_block">
          <h1 id="heading1">JNTUK</h1>
          <h1 id="heading2">Instant Notes</h1>
        </div>
        <div className="bottom-logo_block">
          <p>Contains Study-Materials for B.E./B.Tech students of JNTU-Kakinada affliated Colleges</p>
        </div>
      </div>

      <div className="info_block header_floats">
        <div className="top-info_block">
          <div className="carousel-container">
            <div id="carousel">
              <div>
                <p>Welcome</p>
                <p>To</p>
                <p>JNTUK-Instant!</p>
              </div>
            </div>
          </div>
        </div>
        <BrowserRouter forceRefresh={true} basename={process.env.PUBLIC_URL + "/"}>
          <div className="bottom-info_block">
            <ul>
              <li>
                <Link className="nav_btns" to="/">
                  Browse All
                </Link>
              </li>
              <li>
                <Link className="nav_btns" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="nav_btns" to="/contribute">
                  Contribute
                </Link>
              </li>
            </ul>
          </div>
        </BrowserRouter>
      </div>
    </header>
  );
}

class Content0 extends React.Component {
  render() {
    return <main>{this.props.children}</main>;
  }
}

function Cont() {
  return (
    <BrowserRouter forceRefresh={true} basename={process.env.PUBLIC_URL + "/"}>
      <Switch>
        <Route exact path="/">
          <Main0 />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

/*
class PageTemplate extends React.Component {
  render() {
    return (
      <>
        <HeadBar />
        <hr className="hr_line" />
        <Content0 children={<Cont />} />
      </>
    );
  }
}
*/

function PageTemplate() {
  return (
    <>
      <HeadBar />
      <hr className="hr_line" />
      <Content0 children={<Cont />} />
    </>
  );
}

export default PageTemplate;
