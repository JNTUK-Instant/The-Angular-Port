//import React from "react";
import "./header.css";

import { BrowserRouter as Router, Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <Router>
      <div className="bottom-info_block">
        <ul>
          <li>
            <Link className="nav_btns" to="/">
              Browse All
            </Link>
          </li>
          <li>
            <Link className="nav_btns" to="/about.html">
              About
            </Link>
          </li>
          <li>
            <a id="contribute" className="nav_btns" href="contribute.html">
              Contribute
            </a>
          </li>
        </ul>
      </div>
    </Router>
  );
};

function Header1() {
  return (
    <header>
      <div className="logo_block header_floats">
        <div className="top-logo_block">
          <h1 id="heading1">JNTUK</h1>
          <h1 id="heading2">Instant Notes</h1>
        </div>
        <div className="bottom-logo_block">
          <p>
            Contains Study-Materials for B.E./B.Tech students of JNTU-Kakinada
            affliated Colleges
          </p>
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
        <NavLinks />
      </div>
    </header>
  );
}

export default Header1;
