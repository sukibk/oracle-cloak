import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import OracleSmall from "./assets/oracle-small.jpg";
import { Provider } from "react-redux";
import store from "./components/store/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <img className="oracle-logo" src={OracleSmall} />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
