import React from "react";
import ReactDOM from "react-dom";
import { RecursiveComponent } from "./components/recursive-component";

import "./index.scss";
import { payload } from "./payload";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: recursive-study</div>
    <RecursiveComponent containers={payload.containers} />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
