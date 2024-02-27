import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import HeroCard from "./cards/HeroCard";

function HeroSection() {
  return (
    <div className="min-h-[110vh] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0" >
     
  {/* Background Image */}
  <div className="absolute inset-0 bg-cover bg-center z-10" ></div>
      
      {/* Overlay */}
      

<div className="md:flex justify-around py-12 md:px-12 grid justify-items-center items-center">
<div className="py-4 md:px-4 relative z-20 w-full  mt-4">

<h1 className="text-white font-bold text-4xl leading-10 subpixel-antialiased mb-1">Maximize Your Returns with Expert Tax Consulting Services</h1>
<p className="text-gray-300  subpixel-antialiased mb-8">Personalized Solutions for Individuals and Businesses</p>
<p className=" text-[15px] text-gray-200 subpixel-antialiased font-Nunito font-semibold  max-w-lg  mb-9">
Welcome to Singhal Associates, your trusted partner for expert tax consulting services. Our dedicated team simplifies tax management for individuals and businesses alike. With personalized solutions and reliable guidance, we help you maximize returns and minimize liabilities. Trust us to navigate tax complexities while optimizing your financial strategies.
</p>

</div>
<div className="">
<HeroCard/>
</div>

</div>
<div className="">
<Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-white text-black dark:text-black cursor-pointer "
      >
      Contact us
      </Button>
</div>
    </div>
  );
}

export default HeroSection;
