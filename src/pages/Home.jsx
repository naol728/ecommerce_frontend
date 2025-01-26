import Navbar from "@/components/custom/Navbar";
import React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "../components/ui/aurora-background";
// import { AnimatedTestimonials } from "../components/ui/animated-testimonials";
import { Link } from "react-router-dom";
import { GlareCard } from "@/components/ui/glare-card";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Footer from "@/components/custom/Footer";
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
        className="relative flex flex-col gap-4 items-center justify-center px-4 h-screen  "
      >
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover blur-sx p-14  "
        >
          <source src="../../src/assets/home3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <div className="text-3xl md:text-7xl font-bold dark:text-white text-center z-30">
          NAF brands makes you cool you know
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 z-30 ">
          And wearing NAF brands makes you buitiful
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-8 py-4 z-30">
          <Link to="/login">shop now</Link>
        </button> */}
      </motion.div>

      <div className="h-screen p-2">
        <h2 className="text-center text-5xl font-bold mb-5">
          {" "}
          featured products{" "}
        </h2>
        <div className="flex flex-wrap justify-evenly space-y-3 h-screen  ">
          <div className="grid grid-col-3 grid-rows-2 gap-5 w-full">
            <div
              className=" col-start-1 col-end-3 bg-center bg-no-repeat bg-cover rounded-xl "
              style={{
                backgroundImage:
                  "url(https://i.pinimg.com/736x/d7/f5/d6/d7f5d6d038ed26c9e0874b12ad902b8b.jpg)",
              }}
            ></div>
            <div
              className=" col-start-3 col-end-4 p-10 row-start-1 row-end-3 bg-cover bg-center bg-no-repeat rounded-xl"
              style={{
                backgroundImage:
                  "url(https://i.pinimg.com/736x/9c/5b/57/9c5b57e85040cc03d1cd5ac95245d258.jpg)",
              }}
            >
              {" "}
            </div>
            <div
              className="bg-red-300 bg-cover bg-center bg-no-repeat rounded-xl"
              style={{
                backgroundImage:
                  "url(https://i.pinimg.com/736x/6a/1a/a9/6a1aa9b3f83d19e8f6ee46769e2a3262.jpg)",
              }}
            ></div>
            <div
              className="bg-orange-600 bg-cover bg-center bg-no-repeat rounded-xl"
              style={{
                backgroundImage:
                  "url( https://i.pinimg.com/736x/46/79/27/467927cba825a262c63e325902d1b4d7.jpg)",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

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
