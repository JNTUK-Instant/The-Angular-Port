import React from "react";
import "../styles/inside_main.css";

class Content extends React.Component {
  render() {
    return (
      <div className="main_content">
        <p>This will host the content based on navibar</p>
        <p>Version: 2-alpha</p>
      </div>
    );
  }
}

class NaviBar extends React.Component {
  render() {
    return (
      <nav>
        <p>This will be a side-Nav bar</p>
      </nav>
    );
  }
}

export { NaviBar, Content };
