import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "routers/router";
import reportWebVitals from "./reportWebVitals";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import theme from "./muiTheme.styled";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StyledEngineProvider injectFirst>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </React.StrictMode>
  </StyledEngineProvider>
);

reportWebVitals();
