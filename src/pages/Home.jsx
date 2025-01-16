import Navbar from "@/components/custom/Navbar";
import React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "../components/ui/aurora-background";
// import { AnimatedTestimonials } from "../components/ui/animated-testimonials";
import { Link } from "react-router-dom";
import { GlareCard } from "@/components/ui/glare-card";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
export default function Home() {
  return (
    <>
      <Navbar />
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            NAF brands makes you cool you know
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            And wearing NAF brands makes you buitiful
          </div>
          <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-8 py-4">
            <Link to="/login">shop now</Link>
          </button>
        </motion.div>
      </AuroraBackground>
      {/* <AnimatedTestimonials testimonials={testimonials} /> */}
      <div className="mb-10">
        <h2 className="text-center text-5xl font-bold mb-5">
          {" "}
          our best products{" "}
        </h2>
        <div className="flex flex-wrap justify-evenly space-y-3">
          <GlareCard>
            <img src="../../src/assets/hero9.jpg" />
            <h1 className="text-xl text-white text-center">our best shert</h1>
          </GlareCard>
          <GlareCard>
            <img src="../../src/assets/hero2.jpg" />
            <h1 className="text-xl text-white text-center">our best shert</h1>
          </GlareCard>
          <GlareCard>
            <img src="../../src/assets/hero8.jpg" />
            <h1 className="text-xl text-white text-center">our best shert</h1>
          </GlareCard>{" "}
        </div>
      </div>
      <div>
        <div>
          <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
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
