import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/index";
import RTL from "./theme/RTL";
import ContextsProvider from "./contexts";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <ContextsProvider>
      <ThemeProvider theme={theme}>
        <RTL>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </RTL>
      </ThemeProvider>
    </ContextsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
