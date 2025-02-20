import { createContext, useEffect, useState, ReactNode } from "react";
import axios from "axios";

// Create the Auth context
export const Authcontext = createContext<any>(null);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : null
  );

  // Login function
  const login = async (inputs: any) => {
    const res = await axios.post("http://localhost:5000/api/auth/login", inputs);
    setCurrentUser(res.data);
  };

  // Logout function
  const logout = async () => {
    await axios.post("http://localhost:5000/api/auth/logout");
    setCurrentUser(null);
  };

  // Sync with localStorage
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <Authcontext.Provider value={{ currentUser, login, logout }}>
      {children}
    </Authcontext.Provider>
  );
};
