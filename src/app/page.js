"use client"
import { Oswald } from "next/font/google";
import Image from "next/image";
import PhotoGallery from "./components/PhotoGallery";

export default function Home() {
  return (
    <>
      <div className="h-full w-full relative flex items-center justify-center">
        <Image src="/KennyAuraFarming.jpg" alt="Kenny Aura Farming" width={4907} height={4128}/>
        <h1 className="absolute lg:text-7xl md:text-5xl text-2xl font-main">Welcome to my photography stuff</h1>
      </div>

      <section className="flex flex-col items-center justify-center mt-7 gap-2">
        <h2 className="text-2xl md:text-5xl lg:text-7xl">Sneak peek at some of my stuff</h2>
        

        <PhotoGallery/>
      </section>

    
    </>
  );
}
