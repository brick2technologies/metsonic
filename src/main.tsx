import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { EnquiryModalProvider } from "./context/EnquiryModalProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <EnquiryModalProvider>
      <App />
    </EnquiryModalProvider>
  </React.StrictMode>
);
