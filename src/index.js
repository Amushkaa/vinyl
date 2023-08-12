import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/style.sass";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { YMaps } from "@pbe/react-yandex-maps";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <YMaps>
        <App />
      </YMaps>
    </BrowserRouter>
  </Provider>
);
