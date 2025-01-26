import Navbar from "@/components/custom/Navbar";
import React from "react";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Footer from "@/components/custom/Footer";
import Example from "./Promo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <>
      <Navbar />

      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center  h-screen  "
      >
        {" "}
        <div className="z-30 text-xl md:text-3xl font-bold dark:text-white text-center absolute top-5 ">
          Welcome To NAF Brands We Sell Brand
        </div>
        <video
          autoPlay
          controls
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover blur-sx p-14  "
        >
          <source src="../../src/assets/home3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <div className=" px-10 py-4">
          <h2 className="text-center text-5xl font-bold mb-5">
            {" "}
            featured products{" "}
          </h2>

          <div className="grid grid-col-3 grid-rows-2 gap-5 w-full h-screen grid-flow-col">
            <div
              className=" col-start-1 col-end-3 bg-center bg-no-repeat bg-cover rounded-xl shadow-xl"
              style={{
                backgroundImage:
                  "url(https://i.pinimg.com/736x/d7/f5/d6/d7f5d6d038ed26c9e0874b12ad902b8b.jpg)",
              }}
            >
              {" "}
              <div className="w-full  h-full backdrop-blur-sm hover:backdrop-blur-0  cursor-pointer flex justify-center items-center">
                <h2 className="text-3xl font-black ">
                  <span className="text-orange-600"> Nike</span>{" "}
                  <span className="text-white"> Oranger</span>
                </h2>
              </div>
            </div>
            <div
              className=" col-start-3 col-end-4 p-10 row-start-1 row-end-3 bg-cover bg-center bg-no-repeat rounded-xl shadow-xl"
              style={{
                backgroundImage:
                  "url(https://i.pinimg.com/736x/9c/5b/57/9c5b57e85040cc03d1cd5ac95245d258.jpg)",
              }}
            >
              <div className="w-full  h-full backdrop-blur-sm hover:backdrop-blur-0  cursor-pointer flex justify-center items-center">
                <h2 className="text-3xl font-black ">
                  {" "}
                  <span className="text-red-600"> Nike</span>{" "}
                  <span className="text-white"> RED</span>
                </h2>
              </div>
            </div>
            <div
              className=" bg-cover bg-center bg-no-repeat rounded-xl shadow-xl"
              style={{
                backgroundImage:
                  "url(https://i.pinimg.com/736x/6a/1a/a9/6a1aa9b3f83d19e8f6ee46769e2a3262.jpg)",
              }}
            >
              {" "}
              <div className="w-full  h-full backdrop-blur-sm hover:backdrop-blur-0  cursor-pointer flex justify-center items-center">
                <h2 className="text-3xl font-black shadow-lg backdrop-blur-md ">
                  <span className="text-green-400"> Nike</span>{" "}
                  <span className="text-white"> GREEN</span>
                </h2>
              </div>
            </div>
            <div
              className=" bg-cover bg-center bg-no-repeat rounded-xl shadow-xl"
              style={{
                backgroundImage:
                  "url( https://i.pinimg.com/736x/46/79/27/467927cba825a262c63e325902d1b4d7.jpg)",
              }}
            >
              <div className="w-full  h-full backdrop-blur-sm hover:backdrop-blur-0  cursor-pointer flex justify-center items-center ">
                <h2 className="text-3xl font-black shadow-lg backdrop-blur-md ">
                  <span className="text-yellow-400"> Nike </span>
                  <span className="text-white"> YELLOW</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="px-8 py-4">
        <h1 className="text-3xl font-bold text-left pl-2">Stock Products</h1>
        <div className=" flex overflow-x-scroll">
          {products.map((item) => (
            <div className="p-3 ">
              <Card sx={{ minWidth: 300 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="150"
                  image={item.src}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "text.secondary" }}>
                    {item.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button>Buy now</Button>
                </CardActions>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center h-max">
        <div className="text-center w-[60%]">
          <h2 className="text-2xl my-8 font-bold">
            Frequently Asked Questions ?
          </h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-center">
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-center">
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-center">
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <Footer />
    </>
  );
}
const products = [
  {
    src: "https://i.pinimg.com/736x/55/0d/52/550d528c7a31b41f72d2a05e058639b9.jpg",
    price: "$30",
    name: "Nike Jordan 1",
  },
  {
    src: "https://i.pinimg.com/736x/17/54/a9/1754a96c267c6f0509c974d4c96a88da.jpg",
    price: "$30",
    name: "AirForce 1",
  },
  {
    src: "https://i.pinimg.com/736x/46/b9/45/46b945136a30cbcd5cd5a22e0b539c85.jpg",
    price: "$30",
    name: "Nike sb ",
  },
  {
    src: "https://i.pinimg.com/736x/98/79/bd/9879bdf305e1c22ab807704c571ca6bc.jpg",
    price: "$30",
    name: "Jordan 4",
  },
  {
    src: "https://i.pinimg.com/736x/83/39/2e/83392e1ead2a5764f783ac537d1237af.jpg",
    price: "$30",
    name: "Jordan 21",
  },
];

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
