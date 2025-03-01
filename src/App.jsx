import React from "react";
import Signin from "./pages/Signin";
import Login from "./pages/Signup";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import AuthProvider from "./context/Authcontext";
const rout = createBrowserRouter([
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/shop",
    element: <Shop />,
  },
]);
export default function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={rout} />
      </AuthProvider>
    </>
  );
}
