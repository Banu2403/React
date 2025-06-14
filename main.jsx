import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "./components/ui/provider";
import { store } from "./store";
import { Provider as ReduxProvider } from "react-redux";
import { Router } from "./Router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <Provider>
        <Router />
      </Provider>
    </ReduxProvider>
  </StrictMode>
);
