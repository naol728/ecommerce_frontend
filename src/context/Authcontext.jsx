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
    const users = await axios.get("http://127.0.0.1:3000/api/users");
    const currentUser = users.find(
      (user) => user.username === username && user.password === password
    );
    console.log(currentUser);
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
