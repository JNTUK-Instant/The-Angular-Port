import React from "react";
import "../styles/main.css";

class Content extends React.Component {
  render() {
    return (
      <div className="main_content">
        <p>This will host the content based on Navigation-bar</p>
        <p>Version: 2-alpha-7.2</p>
      </div>
    );
  }
}

class NaviBar extends React.Component {
  render() {
    return (
      <nav>
        <div className="searchdiv">
          <input type="text" placeholder="Search...." />
        </div>
        <div className="navdiv">
          <p>Hello Visitor!</p>
        </div>
      </nav>
    );
  }
}

function Main0() {
  return (
    <>
      <NaviBar />
      <Content />
    </>
  );
}

export default Main0;
