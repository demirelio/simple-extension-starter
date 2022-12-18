import React from "react";
import ReactDOM from "react-dom";
import Popup from "./Popup";

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  // this element doesn't exist
  document.getElementById("root")
);
