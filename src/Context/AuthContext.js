import { createContext, useState, useContext } from "react";
import { clearItem } from "../LocalStorage";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userState, setUserState] = useState(null);

  const login = (user) => {
    setUserState(user);
  };
  const signup = (user) => {
    setUserState(user);
  };
  const logout = () => {
    setUserState(null);
    clearItem();
  };
  console.log(userState, "userState");
  return (
    <AuthContext.Provider value={{ userState, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
