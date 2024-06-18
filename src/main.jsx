import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./Theme/GlobalStyled";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <GlobalStyle />
    <App />
  </Router>
);
