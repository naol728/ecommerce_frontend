import React from "react";
import Signin from "./pages/Signin";
import Login from "./pages/Login";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import Home from "./pages/Home";
import Page from "./app/dashboard/page";
import Shop from "./pages/Shop";
const rout = createBrowserRouter([
  {
    path: "/login",
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
    path: "/home",
    element: <Page />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
]);
export default function App() {
  return (
    <>
      <RouterProvider router={rout} />
    </>
  );
}
