import { createContext, useState, useContext } from "react";
import { clearItem } from "../LocalStorage";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userState, setUserState] = useState(null);
  const [userId, setUserId] = useState(null);
  const login = (user) => {
    setUserState(user);
    setUserId(user._tokenResponse.localId);
  };
  const signup = (user) => {
    setUserState(user);
    setUserId(user._tokenResponse.localId);
  };
  const logout = () => {
    setUserState(null);
    clearItem();
  };
  return (
    <AuthContext.Provider value={{ userState, login, signup, logout, userId }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
