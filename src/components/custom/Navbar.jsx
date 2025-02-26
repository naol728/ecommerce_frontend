import React from "react";
import { ImBrightnessContrast } from "react-icons/im";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
export default function Navbar() {
  return (
    <div className="w-full flex justify-between items-center fixed top-0  shadow-2xl h-14 z-50 backdrop-blur-lg  px-4 ">
      <h1 className=" text-md  sm:text-lg font-extrabold ">
        <Link to="/">NAF BRANDS</Link>
      </h1>

      <ul className=" hidden sm:flex space-x-3 font-bold  ">
        <li className="px-3 py-1 cursor-pointer rounded-2xl">
          {" "}
          <a href="#home"> home</a>
        </li>
        <li className="px-3 py-1 cursor-pointer rounded-2xl">
          <a href="#featured">featurd products</a>
        </li>
        <li className="px-3 py-1 cursor-pointer rounded-2xl">
          <a href="#stock">Stock</a>
        </li>
        <li className="px-3 py-1 cursor-pointer rounded-2xl">
          <a href="#FAQ">FAQ</a>
        </li>
      </ul>
      <div className=" flex items-center space-x-3">
        <div className="flex space-x-1 sm:space-x-3">
          <Button>
            {" "}
            <Link to="/login" className="px-1 py-0 cursor-pointer rounded-2xl">
              Shop Now
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
