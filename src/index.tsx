import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./styles/reset.css";

const root = createRoot(document.getElementById("app"));
root.render(<App />);

if (module.hot) {
  module.hot.accept("./App", () => {
    root.render(<App />);
  });
}
