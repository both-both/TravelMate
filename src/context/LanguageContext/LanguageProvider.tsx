import { useState, type ReactNode } from "react";
import { LanguageContext } from "./LanguageContext";

// Deler sproget med de komponenter, der ligger inde i denne provider.
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState("da");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
