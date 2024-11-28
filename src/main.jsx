import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux-toolkit/store/store";
import GlobalStyle from "./Theme/GlobalStyled";
import {  QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <Router>
        <GlobalStyle />
        <App />
      </Router>
    </QueryClientProvider>
  </Provider>
);
