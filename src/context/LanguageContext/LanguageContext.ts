import { createContext, useContext } from "react";
import type { LanguageContextValue } from "./LanguageContext.types";

// Opretter en fælles kontekst med standardværdier, hvis der ikke er en provider.
export const LanguageContext = createContext<LanguageContextValue>({
  language: "da",
  setLanguage: () => {},
});

export const useLanguage = () => {
  return useContext(LanguageContext);
};
