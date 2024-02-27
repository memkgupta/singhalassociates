import HeroSection from "@/components/HeroSection";
import { ImagesSliderDemo } from "@/components/ImageSlider";
import { ImagesSlider } from "@/components/ui/image-slider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between ">
    <ImagesSliderDemo/>
    </main>
  );
}
