import Navbar from "@/components/custom/Navbar";
import React from "react";
import { Link } from "react-router-dom";

export default function Demo() {
  return (
    <div className="h-screen grid grid-cols-2 gap-3">
      <Navbar />
      <div className="flex justify-center items-center p-10 ">
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold text-center ">
            NAF brands makes you cool you know And wearing NAF brands makes you
            buitiful
          </h2>
          <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-8 py-4 z-30 self-center mt-10">
            shop now
          </button>
        </div>
      </div>
      <div className="hidden md:block">
        <video
          src="../../src/assets/home.mp4"
          className="w-[90%] h-screen rounded-xl "
          autoPlay
          loop
          muted
        ></video>
      </div>
    </div>
  );
}
