"use client";
import { createContext, useContext, useState, useMemo, useEffect } from "react";
const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(false); // false refers light

  const contextData = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  // is coding run browser?
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (theme) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={contextData}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("There is no theme context provider");
  }
  return context;
};
