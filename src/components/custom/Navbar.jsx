import React from "react";
import { ImBrightnessContrast } from "react-icons/im";
export default function Navbar() {
  return (
    <div className="w-full flex justify-between items-center  shadow-2xl p-4 ">
      <h1 className="text-lg font-extrabold ">NAF BRANDS</h1>
      <div className="text-2x ">
        <ImBrightnessContrast />
      </div>
    </div>
  );
}
