import React from "react";
import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { createRoot } from "react-dom/client";
// import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
const root = document.getElementById("root");

// Instead of using ReactDOM.render, use createRoot
const rootElement = createRoot(root);

rootElement.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
