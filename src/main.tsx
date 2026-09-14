import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./styled/Theme.ts";
import { GlobalStyle } from "./styled/Global.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle>
          <App />
        </GlobalStyle>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
