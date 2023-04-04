import "./index.css";
import Header from "./Components/Header/Header";
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
