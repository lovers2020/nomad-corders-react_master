import { useState } from "react";
import "./App.css";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { Outlet } from "react-router-dom";
import { darkTheme, lightTheme } from "./theme";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
body {
  font-size: 16px;
  font-family: 'Noto Sans';
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  
}
  * {
    box-sizing:border-box;
  }
  a {
    text-decoration:none;
    color:inherit;
  }
`;

function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleDark = () => setIsDark((current) => !current);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Outlet context={{ toggleDark, isDark }} />
      </ThemeProvider>
    </>
  );
}

export default App;
