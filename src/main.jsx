import React, { createContext, useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux-toolkit/store/store";
import GlobalStyle from "./Theme/GlobalStyled";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor } from "./redux-toolkit/store/store";
import { Toaster } from "sonner";
import { MessageProvider } from "./hooks/useMessage";
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <GlobalStyle />
          <MessageProvider>
            <App />
          </MessageProvider>
          <Toaster
            position="top-right"
            expand={false}
            richColors
            duration={3000}
          />
        </Router>
      </QueryClientProvider>
    </PersistGate>
  </Provider>
);
