import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import FetchApi from "./components/FetchApi";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FetchApi />
  </StrictMode>
);
