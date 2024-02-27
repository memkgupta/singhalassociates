"use client"
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";

import Image from "next/image";

const ServiceCard:React.FC<{src:string,description:string,title:string}>=({src,description,title})=>{
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={`${src}`}
          alt="src"
          height="100"
          width="100"
          className="object-contain mx-auto"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
         {title}
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {description.slice(0,159)+'...'}
        </p>
        <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>View More </span>
         
        </button>
      </BackgroundGradient>
    </div>
  )
}

export default ServiceCard