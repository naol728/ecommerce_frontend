import React, { useEffect, useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Typography } from "@mui/material";
import Navbar from "../components/custom/Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "@/context/Authcontext";
import { useRegister } from "@/context/Registercontext";
export default function Signup() {
  const [imgIndex, setImgIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [conformpassword, setConformpassword] = useState("");
  const { islogin } = useAuth();
  const navigate = useNavigate();

  function handleinput(e) {
    const { name, value } = e.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));
  }
  async function register(formData) {
    const { name, email, password } = formData;
    const res = await axios.post("http://localhost:3000/api/users", {
      name,
      email,
      password,
    });

    if (res.status === 201) {
      navigate("/signin");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (conformpassword !== formdata.password)
      return alert("please conform your password");
    register(formdata);
  }

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

  if (islogin) {
    navigate("/shop");
  }
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-[90.5dvh]  md:grid md:grid-cols-2 ">
        <div
          className={`transition-opacity ease-in duration-200 ${
            fade ? "bg-opacity-100" : "bg-opacity-100"
          } hidden sm:hidden bg-cover sm:bg-center md:bg-right-top  mt-2 md:block h-[100%] `}
          style={{ backgroundImage: `url(${images[imgIndex]})` }}
        ></div>

        <div className="block md:flex md:justify-center md:items-center ">
          <form
            className="flex gap-y-6 w-full max-w-md  items-center p-10 rounded-xl  flex-col"
            onSubmit={handleSubmit}
          >
            <Typography
              variant="h4"
              component="h1"
              sx={{ fontSize: "1.5xl", fontWeight: "700" }}
            >
              sign up
            </Typography>

            <div className="w-full">
              <Input
                type="name"
                placeholder="name"
                name="name"
                onChange={handleinput}
                value={formdata.name}
              />
            </div>

            <div className="w-full">
              <Input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleinput}
                value={formdata.email}
              />
            </div>

            <div className="w-full flex flex-col ">
              <Input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleinput}
                value={formdata.password}
              />
            </div>

            <div className="w-full flex flex-col ">
              <Input
                type="password"
                placeholder=" Conform Password"
                onChange={(e) => setConformpassword(e.target.value)}
                value={conformpassword}
              />
            </div>

            <Button className="w-full text-xl bg-primary " type="submit">
              sign up
            </Button>
            <div className="font-semibold text-lg">
              i have no account{" "}
              <Link to="/signin" className="underline ml-3 ">
                sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
