"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";

import Image from "next/image"
import { CardStack } from "../ui/card-stack";
import { cn } from "@/utils/cn";
function HeroCard() {
  return (
    <div className="h-auto   flex items-center justify-center w-full">
    <CardStack items={CARDS} />
  </div>
  )
}
export const Highlight = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <span
        className={cn(
          "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
          className
        )}
      >
        {children}
      </span>
    );
  };
   
  const CARDS = [
    {
      id: 0,
      name: "Manu Arora",
      designation: "CEO",
      company:"XYZ Enterprises",
      content: (
        <p>
         Working with Singhal Associates was a game-changer for me. Their <Highlight>expertise in tax planning</Highlight> helped me save a significant amount on my taxes while ensuring full compliance with the law.
        </p>
      ),
    },
    {
      id: 1,
      name: "Elon Musk",
      designation: "CFO",
      company:"ABC Corporation",
      content: (
        <p>
          I was facing a complex tax issue, and Singhal Associates provided <Highlight>exceptional guidance</Highlight> every step of the way. Their team's <Highlight>dedication</Highlight> and <Highlight>attention to detail</Highlight> are truly commendable.
        </p>
      ),
    },
    {
      id: 2,
      name: "Tyler Durden",
      designation: "Finance Manager",
      company:"PQR Corporations",
      content: (
        <p>
        I've been a client of Singhal Associates for several years and I am impressed by their <Highlight>professionalism</Highlight> and <Highlight>commitment to client satisfaction</Highlight>.
        </p>
      ),
    },
  ];
export default HeroCard