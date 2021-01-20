import React, { createContext, useState } from "react";

export const AuthenticationContext = createContext(null);

export const AuthenticationProvider = ({children}) => {
  const [auth, setAuth] = useState(false);
  return (
    <AuthenticationContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthenticationContext.Provider>
  );
};