import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import Theme from "./Theme";

ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <App />
    </Theme>
  </React.StrictMode>,
  document.getElementById("root")
);
