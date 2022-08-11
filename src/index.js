import React from "react";
import ReactDOM from "react-dom";
import { StateProvider } from "./StateContext";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <App />
      </Router>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);


