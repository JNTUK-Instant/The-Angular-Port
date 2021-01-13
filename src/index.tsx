import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import Header1 from "./header";
import Content0 from "./content";
//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header1 />
    <hr className="hr_line" />
    <Content0 />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();