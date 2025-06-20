"use client";

import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";

export function HeaderSection() {
  const scrollToHero = () => {
    document
      .getElementById('hero-section')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
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
          Reading is my favorite drug.
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          I've been scouring the web for ways to expand my awareness and I can't get enough.
        </div>
        <button onClick={scrollToHero} className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          See recent
        </button>
      </motion.div>
    </AuroraBackground>
  );
}
