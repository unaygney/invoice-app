import { createContext, useContext, useState, useMemo } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(["teest"]);
  const data = useMemo(
    () => ({
      userData,
      setUserData,
    }),
    [userData]
  );

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export const getUserData = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("There is no provided data");
  }
  return context;
};
