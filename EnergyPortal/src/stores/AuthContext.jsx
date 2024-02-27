import { createContext, useState } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: () => {},
});

export default function AuthContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function loginHandler() {
    setIsLoggedIn(true);
  }

  function logoutHandler() {
    setIsLoggedIn(false);
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
