import React, { useEffect, useState } from "react";
import img from "../src/assets/hero1.jpg";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Container, Link, Typography } from "@mui/material";
import { ImBrightnessContrast } from "react-icons/im";
export default function App() {
  const [imgIndex, setImgIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const images = [
    "../src/assets/hero1.jpg",
    "../src/assets/hero2.jpg",
    "../src/assets/hero4.jpg",
    "../src/assets/hero5.jpg",
    "../src/assets/hero6.jpg",
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
    <div className="bg-background">
      <div>
        <div className="w-full flex justify-between items-center  shadow-2xl p-4">
          <h1 className="text-lg font-extrabold ">NAF BRANDS</h1>
          <div className="text-2x ">
            <ImBrightnessContrast />
          </div>
        </div>

        <div className="flex justify-center items-center h-[91dvh]  md:grid md:grid-cols-2 ">
          <div className="block md:flex md:justify-center md:items-center">
            <form className="flex gap-y-6 min-w-[90%] max-w-md  items-center  p-10 rounded-xl  flex-col">
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
            </form>
          </div>

          <div
            className={`transition-opacity duration-1000 ${
              fade ? "opacity-100" : "opacity-0"
            } hidden sm:hidden bg-cover md:block h-[100%] z-0`}
            style={{ backgroundImage: `url(${images[imgIndex]})` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
