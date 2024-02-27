import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { AnimatedTooltip } from './ui/animated-tooltip'
const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "/user.avif",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "/user.avif",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "/user.avif",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "/user.avif",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "/user.avif",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image:
        "/user.avif",
    },
  ];
function AboutUsSection() {
  return (
    <div className='h-screen w-full   flex md:items-center  md:justify-center bg-slate-950 antialiased bg-grid-white/[0.02] relative overflow-hidden'>
         <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
    <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
    <p className='text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>Our Story <br />Your Trusted Tax Experts</p>
    <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
   Singhal Associate is a leading provider of tax consulting services, dedicated to helping individuals and businesses navigate the complexities of taxation with confidence. Our team of experienced professionals combines expertise with a client-centric approach to deliver tailored solutions that maximize savings and minimize liabilities
        </p>
        <p className='text-3xl md:text-7xl mt-5 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>Our Team </p>
        <div className="flex mt-5 flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
    </div>
 
    </div>
  )
}

export default AboutUsSection