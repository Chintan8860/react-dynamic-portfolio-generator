import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";
import PortfolioProvider from "./context/PortfolioProvider";

ReactDOM.render(
  <Provider store={store}>
    <PortfolioProvider>
    <App />
    </PortfolioProvider>
  </Provider>,
  document.getElementById("root")
);
