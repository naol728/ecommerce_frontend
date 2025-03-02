import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

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
    const { email, password } = credental;
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.token);
      setlogin();
      alert("Login successful!");
    } else {
      alert("Login failed!");
    }
  }

  useEffect(() => {
    async function fetchToken() {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await axios.post(
          "http://localhost:3000/api/auth/protect",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          const userinfo = await axios.get(
            `http://localhost:3000/api/users/${response.data.user.id}`
          );
          setUser(userinfo.data.message);
          setlogin();
        } else if (response.status === 401) {
          localStorage.removeItem("token");
        }
      }
    }
    fetchToken();
  }, [islogin]);
  console.log(user);
  console.log(islogin);
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
