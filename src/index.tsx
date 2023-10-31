import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import App from "./App";
import "./index.css";
import { theme } from "./theme";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
body {
  font-size: 16px;
  font-family: 'Noto Sans';
  background-color: ${(props) => props.theme.bgColor};
  
}
  * {
    box-sizing:border-box;
  }
  a {
    text-decoration:none;
    color:inherit;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </>
);
