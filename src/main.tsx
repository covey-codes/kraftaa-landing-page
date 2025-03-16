import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

const root = createRoot(rootElement); // ✅ Ensures root exists
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
