import React from "react";
import "../styles/main.css";

class Content extends React.Component {
  render() {
    return (
      <div className="main_content">
        <p>This will host the content based on Navigation-bar</p>
        <p>Version: 2-alpha-7.4</p>
      </div>
    );
  }
}

class NaviBar extends React.Component {
  render() {
    return (
      <nav>
        <div className="navdiv">
          <div className="searchdiv">
            <input type="text" placeholder="Search...." />
          </div>
          <hr />
          <p>Hello Visitor!</p>
        </div>
      </nav>
    );
  }
}

function Main0() {
  return (
    <main>
      <NaviBar />
      <Content />
    </main>
  );
}

export default Main0;
