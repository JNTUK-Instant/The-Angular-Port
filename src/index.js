import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import { HeadBar, Footer, Main0 } from "./components/";

class PageTemplate extends React.Component {
  render() {
    return (
      <>
        <HeadBar />
        <hr className="hr_line" />
        <Main0 />
        <hr className="hr_line" />
        <Footer />
      </>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <PageTemplate />
  </React.StrictMode>,
  document.getElementById("root")
);

var disqus_config = function () {
  this.page.url = "https://jntuk-instant.github.io/The-React-Port/";
  this.page.identifier = "123456789";
};

(function () {
  var d = document,
    s = d.createElement("script");
  s.src = "https://https-jntuk-instant-github-io.disqus.com/embed.js";
  s.setAttribute("data-timestamp", +new Date());
  (d.head || d.body).appendChild(s);
})();
