import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("userr")) || null);
  console.log("this is the aut user",authUser)
  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};