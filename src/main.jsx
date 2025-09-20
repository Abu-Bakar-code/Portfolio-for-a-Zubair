import React, { useEffect } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

function RootApp() {
  // Remove loader once React mounts
useEffect(() => {
  const loader = document.getElementById("loader");
  if (loader) {
    // Wait 3 seconds before fading out loader
    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.transition = "opacity 0.5s ease";
      setTimeout(() => loader.remove(), 500);
    }, 3000); // 👈 keep loader for 3 seconds
  }
}, []);

  return <App />;
}

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("❌ No <div id='root'></div> found in index.html");
}

const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <RootApp />
  </StrictMode>
);
