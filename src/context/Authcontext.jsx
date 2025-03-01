import axios from "axios";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [islogin, setIslogin] = useState(false);
  const [user, setUser] = useState(null);
  function setlogin() {
    setIslogin(true);
  }
  function setlogout() {
    setIslogin(false);
  }
  async function login(credental) {
    const { username, password } = credental;
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    console.log(response);
  }

  const value = {
    islogin,
    user,
    setlogin,
    setlogout,
    login,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("useAuth must be used within AuthProvider");

  return context;
}
