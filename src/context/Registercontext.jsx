import axios from "axios";
import { createContext, useContext } from "react";

const RegisterContext = createContext();

export default function RegisterProvider({ children }) {
  async function register(formData) {
    const { name, email, password } = formData;
    const res = await axios.post("http://localhost:3000/api/users", {
      name,
      email,
      password,
    });

    console.log(res);
  }
  const value = { register };
  return (
    <RegisterContext.Provider value={value}>
      {children}
    </RegisterContext.Provider>
  );
}
export function useRegister() {
  const context = useContext(RegisterContext);
  if (!context) {
    throw new Error("useRegister must  be used inside the registerprovider");
  }
  return context;
}
