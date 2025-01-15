import React from "react";
import Signin from "./pages/Signin";
import Login from "./pages/Login";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
const rout = createBrowserRouter([
  {
    path: "/",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Login />,
  },
]);
export default function App() {
  return (
    <>
      <RouterProvider router={rout} />
    </>
  );
}
