import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { RecursiveComponent } from "./components/recursive-component";

import "./index.scss";
import { payload } from "./payload";
import { store } from "./store/store";

const App = () => (
  <Provider store={store}>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: recursive-study</div>
      <RecursiveComponent containers={payload.containers} />
    </div>
  </Provider>
);
ReactDOM.render(<App />, document.getElementById("app"));
