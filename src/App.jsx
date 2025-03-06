import React from "react";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import AuthProvider from "./context/Authcontext";
import RegisterProvider from "./context/Registercontext";
import Dashboard from "./pages/Dashboard";
import Addproduct from "./pages/Addproduct";
const rout = createBrowserRouter([
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: (
      <RegisterProvider>
        <Signup />
      </RegisterProvider>
    ),
  },
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "addproduct",
        element: <Addproduct />,
      },
    ],
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
