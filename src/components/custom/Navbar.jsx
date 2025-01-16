import React from "react";
import { ImBrightnessContrast } from "react-icons/im";
export default function Navbar() {
  return (
    <div className="w-full flex justify-between items-center fixed top-0  shadow-2xl h-14 z-50 bg-background px-4 ">
      <h1 className="text-lg font-extrabold ">NAF BRANDS</h1>

      <ul className="flex space-x-3 font-bold ">
        <li className="bg-black text-white px-3 py-1 cursor-pointer rounded-2xl">
          home
        </li>
        <li className="bg-black text-white px-3 py-1 cursor-pointer rounded-2xl">
          about
        </li>
        <li className="bg-black text-white px-3 py-1 cursor-pointer rounded-2xl">
          products
        </li>
        <li className="bg-black text-white px-3 py-1 cursor-pointer rounded-2xl">
          testemonial
        </li>
      </ul>
      <div className="text-xl ">
        <ImBrightnessContrast />
      </div>
    </div>
  );
}
