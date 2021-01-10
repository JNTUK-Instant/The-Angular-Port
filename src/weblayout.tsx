import React from "react";
import "./styles/weblayout.css";

function Layout() {
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
        <div className="bottom-info_block">
          <ul>
            <li>
              <a id="browse" className="nav_btns" href=".">
                Browse All
              </a>
            </li>
            <li>
              <a id="about" className="nav_btns" href="about.html">
                About
              </a>
            </li>
            <li>
              <a id="contribute" className="nav_btns" href="contribute.html">
                Contribute
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Layout;
