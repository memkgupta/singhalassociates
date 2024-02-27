'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
function Navbar({className}:{className?:string}){
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-8 inset-x-0 max-w-2xl mx-auto z-50 px-4", className)}>

<Menu setActive={setActive}>
  <div className="relative rounded-full boder border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4  ">
  <Link href={"/home"}>
    <MenuItem setActive={setActive} active={active} item="Home">
 
    </MenuItem>
   
  </Link>
  <MenuItem setActive={setActive} active={active} item="Services">
    <div className="flex flex-col space-y-4 text-sm">
           <div className="flex flex-col space-y-4">
           <HoveredLink href="/income-tax">Income Tax </HoveredLink>
           <HoveredLink href="/gst">GST Compliance</HoveredLink>
           <HoveredLink href="/tax-return">Tax Return Filing</HoveredLink>
           <HoveredLink href="/tax-audit">Tax Audit Assistance</HoveredLink>
           <HoveredLink href="/tds">TDS Compilance</HoveredLink>
           <HoveredLink href="/other-services">Others</HoveredLink>
           </div>
           
          </div>
    </MenuItem>
    <Link href={"/about"}>
      <MenuItem setActive={setActive} active={active} item="About Us"></MenuItem>
    </Link>
    <Link href={"/about"}>
      <MenuItem setActive={setActive} active={active} item="Contact Us"></MenuItem>
    </Link>
    <Link href={"/articles"}>
      <MenuItem setActive={setActive} active={active} item="Articles"></MenuItem>
    </Link>
  </div>

    <Link href={"/login"} className="text-white justify-self-end text-sm">Login</Link>
</Menu>

    </div>
  )
}

export default Navbar