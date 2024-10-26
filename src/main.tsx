import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./Styles/custom.scss";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./Global/Store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster />
      <App />
    </Provider>
  </React.StrictMode>
);
