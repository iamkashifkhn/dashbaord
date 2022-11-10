import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import "../node_modules/primeicons/primeicons.css";
import { BrowserRouter as Router } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/antd/dist/antd.css";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
