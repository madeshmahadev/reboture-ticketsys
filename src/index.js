import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { BrowserRouter as Router } from "react-router-dom";

import "semantic-ui-less/semantic.less";
import "./index.css";

ReactDOM.render(

  <Router>
      <App />
  </Router>,
  document.getElementById("root")
);