"use client"
import { Oswald } from "next/font/google";
import Image from "next/image";
import PhotoGallery from "./components/PhotoGallery";
import CardReview from "./components/CardReview";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from 'next/link'
import Marquee from "react-fast-marquee";

export default function Home() {
  
  const photos = [
    {photo: "/KennyAuraFarming.jpg", category: "Human", name: "Blud think he's an aura farmer"},
    {photo: "/TheBoys.jpg", category: "Human", name: "The Boys"},
    {photo: "/CardinStairs.jpg", category: "Human", name: "Cardin"},
    {photo: "/CarLongExposure.jpg", category: "Long Exposure", name: "Car look cool hehe"},
    {photo: "/NavidAuraFarming.jpg", category: "Human", name: "Bro IS an aura farmer"},
    {photo: "/CommHillRed.jpg", category: "Street", name: "Communication Hill Street"},
    {photo: "/PersonOnStairs.jpg", category: "Human", name: "Cardin"},
    {photo: "/NavidFlex.jpg", category: "Human", name: "Navid big boy"},
    {photo: "/Brian.jpg", category: "Human", name: "Brian"},
    {photo: "/TroyMewing.jpg", category: "Human", name: "Troy Mewing"},
    {photo: "/SeabassAuraFarming.jpg", category: "Human", name: "Seabass Aura Farming"},
    {photo: "/Shiba.jpg", category: "Cool", name: "Shiba!"},
    {photo: "/SFStreet.jpg", category: "Street", name: "Street next to Golden Gate Park"},
    {photo: "/JapaneseBuilding.jpg", category: "Architecture", name: "Japanese Tea Garden Architecture"},
    {photo: "/TimothyAuraFarming.jpg", category: "Human", name: "Timothy Aura Farming"},
    {photo: "/NasirAndAarnav.jpg", category: "Human", name: "Nasir Aura Farming"},
  ];
  
  return (
    <>
      <div className="h-full w-full relative flex items-center justify-center">
        <Image src="/KennyAuraFarming.jpg" alt="Kenny Aura Farming" width={4907} height={4128}/>
        <div className="absolute flex flex-col items-center justify-center gap-7">
          <h1 className="lg:text-7xl md:text-5xl text-2xl font-main">Welcome to my photography stuff</h1>
          <Link className="w-[5rem] h-[3rem] md:w-[10rem] border rounded-2xl p-7 bg-emerald-300 font-main flex items-center justify-center" href="/pages/choosecategory">Enter Portfolio</Link>
        </div>
      </div>

      <section className="flex flex-col items-center justify-center mt-7 gap-2">
        <h2 className="text-2xl md:text-5xl lg:text-7xl font-main">Some of my Favorites</h2>
        
        <PhotoGallery photos={photos}/>
      </section>
      
      <section>
        <Marquee>
          <Image src="/SeabassTheThinker.jpg" alt="Seabass the Thinker" width={500} height={500}/>
          <Image src="/Emily.jpg" alt="Emily" width={500} height={500}/>
          <Image src="/GasStation.jpg" alt="Gas Station" width={500} height={500}/>
          <Image src="/EpicCar.jpg" alt="Epic Car" width={500} height={500}/>
          <Image src="/BlackCar2.jpg" alt="Epic Car" width={500} height={500}/>
          <Image src="/RedCarEngine.jpg" alt="Epic Car" width={500} height={500}/>
          
        </Marquee>
      </section>

      <section className="flex flex-col items-center justify-center mt-7 gap-2 p-7">
        <h2 className="text-2xl font-main md:text-5xl lg:text-7xl">Reviews</h2>
        <Carousel className="md:w-[90%] w-[75%]" plugins={[Autoplay({delay: 3000})]}>
          <CarouselContent className="-ml-4">
            <CarouselItem className="pl-4"><CardReview msg="Bro made me look majestic" image="/TroyMewing.jpg"/></CarouselItem>
            <CarouselItem className="pl-4"><CardReview msg="Meh" image="/Emily.jpg"/></CarouselItem>
            <CarouselItem className="pl-4"><CardReview msg="gg" image="/SeabassLayingDown.jpg"/></CarouselItem>
          </CarouselContent>
          <CarouselNext/>
          <CarouselPrevious/>
        </Carousel>
      </section>


    
    </>
  );
}
