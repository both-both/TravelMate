import { useEffect, useState, type ReactNode } from "react";
import { DarkModeContext } from "./DarkModeContext";

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  // Skifter mellem true og false
  const toggleDarkMode = () => {
    setDarkMode((current) => !current);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
