import AboutUsSection from "@/components/AboutUsSection";
import HeroSection from "@/components/HeroSection";
import { ImagesSliderDemo } from "@/components/ImageSlider";
import Lamp from "@/components/Lamp";
import ServiceSection from "@/components/ServiceSection";

import { ImagesSlider } from "@/components/ui/image-slider";

import Image from "next/image";

export default function Home() {
 
  
  return (
    <main className="flex  flex-col items-center justify-between bg-slate-950 ">
    <ImagesSliderDemo/>
    <Lamp/>
    <ServiceSection/>
    <AboutUsSection/>
    </main>
  );
}
