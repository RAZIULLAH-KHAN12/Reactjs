import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from './store/index';

const root = ReactDOM.createRoot(document.getElementById("root"));
// here we provide in all component thats why we we provide in root component.
root.render(
  <Provider store={store}> 
    <App />
  </Provider>
);
