import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { FilterProvider } from "./contexts";
import { BrowserRouter } from "react-router-dom";
import { ScrollToTop } from "./components/index.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <FilterProvider>
        <ScrollToTop />
        <App />
      </FilterProvider>
    </BrowserRouter>
  </React.StrictMode>
);
