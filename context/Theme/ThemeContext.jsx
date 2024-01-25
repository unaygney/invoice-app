import { createContext, useContext, useState, useMemo } from "react";

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

  if (theme) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

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
