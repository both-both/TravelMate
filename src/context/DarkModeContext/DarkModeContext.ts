import { createContext, useContext } from "react";
import type { DarkModeContextValue } from "./DarkModeContext.types";

export const DarkModeContext = createContext<DarkModeContextValue>({
  darkMode: false,
  toggleDarkMode: () => {},
  setDarkMode: () => {},
});

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};
