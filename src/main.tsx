import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./styled/Theme.ts";
import { GlobalStyle } from "./styled/Global.ts";
import { LanguageProvider } from "./context/LanguageContext/LanguageProvider.tsx";
import { DarkModeProvider } from "./context/DarkModeContext/DarkModeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <DarkModeProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
          </ThemeProvider>
        </DarkModeProvider>
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
);
