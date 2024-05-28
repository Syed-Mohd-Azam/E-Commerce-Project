import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CartContextProvider, FilterProvider } from "./contexts";
import { BrowserRouter } from "react-router-dom";
import { ScrollToTop } from "./components/index.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <FilterProvider>
          <ScrollToTop />
          <App />
        </FilterProvider>
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
