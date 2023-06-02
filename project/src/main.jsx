import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import OracleSmall from "./assets/oracle-small.jpg";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <img className="oracle-logo" src={OracleSmall} />
    <App />
  </React.StrictMode>
);
