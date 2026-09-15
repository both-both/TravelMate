import { createContext, useContext, useState, type ReactNode } from "react";
import type { LanguageContextValue } from "./LanguageContext.types";

export const LanguageContext = createContext<LanguageContextValue>({
  language: "da",
  setLanguage: () => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState("da");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
export const useLanguage = () => {
  return useContext(LanguageContext);
};
