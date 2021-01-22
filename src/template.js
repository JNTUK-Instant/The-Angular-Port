import "./styles/main.css";
import "./styles/index.css";
import React from "react";

import Main0 from "./components/main";
import Footer from "./components/footer";
import HeadBar from "./components/header";

class Content0 extends React.Component {
  render() {
    return <main>{this.props.children}</main>;
  }
}

class PageTemplate extends React.Component {
  render() {
    return (
      <>
        <HeadBar />
        <hr className="hr_line" />
        <Content0 children={<Main0 />} />
        <hr className="hr_line" />
        <Footer />
      </>
    );
  }
}

export default PageTemplate;
