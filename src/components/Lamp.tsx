"use client"
import React from 'react'
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";

function Lamp() {
  return (
    <section id='lampSection' className='w-full '>
<div className='hidden md:block'>
<LampContainer>
    <motion.h1
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
    >
      Tailored Solutions to <br /> Simplify Your Tax Journey
    </motion.h1>
  </LampContainer>
</div>
<div className='sm:block md:hidden bg-slate-950'>
<motion.h1
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className=" bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
    >
      Tailored Solutions to <br /> Simplify Your Tax Journey
    </motion.h1>
</div>
    </section>

  )
}

export default Lamp