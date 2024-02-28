'use client'
import React, { useRef, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiCodesandboxLogo } from "react-icons/pi";
function Navbar({className}:{className?:string}){
  const [active, setActive] = useState<string | null>(null);
const [isOpen,setIsOpen]=useState(false);

  return (
    <div className={cn("fixed top-8 inset-x-0 max-w-2xl mx-auto z-50 px-4", className)}>

<Menu setActive={setActive}>
<PiCodesandboxLogo fill="white" size={40}/>
  <div className="relative rounded-full boder border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input hidden md:flex items-center justify-between space-x-4  ">



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
{isOpen&&<div className=" p-5
absolute top-14 rounded-md w-5/6 gap-3 mx-auto boder border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input grid justify-center  ">
  <Link href={"/home"}>
    <MenuItem setActive={setActive} active={active} item="Home">
 
    </MenuItem>
   
  </Link>
  <Link id="scroll-services" href={"#services"}>
  <MenuItem setActive={setActive} active={active} item="Services">

</MenuItem>
  </Link>

    <Link href={"/about"}>
      <MenuItem setActive={setActive} active={active} item="About Us"></MenuItem>
    </Link>
    <Link href={"/about"}>
      <Link href={'#'} id="scroll-contact">
      <MenuItem  setActive={setActive} active={active} item="Contact Us"></MenuItem>
      </Link>
    </Link>
    <Link href={"/articles"}>
      <MenuItem setActive={setActive} active={active} item="Articles"></MenuItem>
    </Link>
</div>}
  

    <span onClick={()=>{setIsOpen(!isOpen)}} className="text-white cursor-pointer md:hidden"><GiHamburgerMenu/></span>
</Menu>

    </div>
  )
}

export default Navbar