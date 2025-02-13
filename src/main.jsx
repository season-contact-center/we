import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TonConnectUIProvider manifestUrl="https://season-contact-center.github.io/we/tonconnect-manifest.json">
    <App />
  </TonConnectUIProvider>
);
