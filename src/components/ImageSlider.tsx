"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/image-slider";
import HeroSection from "./HeroSection";

export function ImagesSliderDemo() {
  const images = [
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=1426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <ImagesSlider className="h-auto" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center w-full items-center"
      >
        {/* <motion.p className="  bg-clip-text  bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          <HeroSection/>
        </motion.p> */}
       <HeroSection/>
      </motion.div>
    </ImagesSlider>
  );
}
