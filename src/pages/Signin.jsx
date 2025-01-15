import React, { useEffect, useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Typography } from "@mui/material";
import Navbar from "../components/custom/Navbar";
export default function Signin() {
  const [imgIndex, setImgIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const images = [
    "./../../src/assets/hero1.jpg",
    "./../../src/assets/hero2.jpg",
    "./../../src/assets/hero6.jpg",
    "./../../src/assets/hero7.jpg",
    "./../../src/assets/hero8.jpg",
    "./../../src/assets/hero9.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setImgIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(true), 500;
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div className="bg-background ">
      <div>
        <Navbar />
        <div className="flex justify-center items-center h-[91dvh]  md:grid md:grid-cols-2 ">
          <div className="block md:flex md:justify-center md:items-center">
            <form className="flex gap-y-6 w-full max-w-md  items-center  p-10 rounded-xl  flex-col">
              <Typography
                variant="h4"
                component="h1"
                sx={{ fontSize: "1.5xl", fontWeight: "700" }}
              >
                sign in
              </Typography>
              <Button className="w-full " variant="outline">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/640px-Google_%22G%22_logo.svg.png"
                  className="w-7"
                />
                sign in with google
              </Button>
              <div className="w-full">
                <Input type="email" placeholder="Email" />
              </div>

              <div className="w-full flex flex-col ">
                <Input type="password" placeholder="Password" />
                <a className="mt-2  text-right  underline cursor-pointer">
                  forget password
                </a>
              </div>

              <Button className="w-full text-xl bg-primary ">sign in</Button>
              <div className="font-semibold text-lg">
                i have no account{" "}
                <a href="" className="underline ml-3 ">
                  sign up
                </a>
              </div>
            </form>
          </div>

          <div
            className={`transition-opacity ease-in duration-200 ${
              fade ? "bg-opacity-100" : "bg-opacity-100"
            } hidden sm:hidden bg-cover sm:bg-center md:bg-right-top  mt-2 md:block h-[100%] `}
            style={{ backgroundImage: `url(${images[imgIndex]})` }}
          ></div>
        </div>
      </div>
    </div>
  );
}