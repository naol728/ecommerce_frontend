import React from "react";
import { ImBrightnessContrast } from "react-icons/im";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
export default function Navbar() {
  return (
    <div className="w-full flex justify-between items-center fixed top-0  shadow-2xl h-14 z-50 bg-background px-4 mt-2">
      <h1 className="text-lg font-extrabold ">
        <Link to="/">NAF BRANDS</Link>
      </h1>

      <ul className=" hidden sm:flex space-x-3 font-bold  ">
        <li className="px-3 py-1 cursor-pointer rounded-2xl">home</li>
        <li className="px-3 py-1 cursor-pointer rounded-2xl">about</li>
        <li className="px-3 py-1 cursor-pointer rounded-2xl">products</li>
        <li className="px-3 py-1 cursor-pointer rounded-2xl">testemonial</li>
      </ul>
      <div className=" flex items-center space-x-3">
        <div className="flex space-x-3">
          <Button>
            {" "}
            <Link to="/login" className="px-1 py-0 cursor-pointer rounded-2xl">
              sign in
            </Link>
          </Button>
          <Button variant="outline">
            <Link to="/signup" className="px-1 py-0 cursor-pointer rounded-2xl">
              sign up
            </Link>
          </Button>
        </div>
        <ImBrightnessContrast />
      </div>
    </div>
  );
}
