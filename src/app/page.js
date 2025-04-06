"use client"
import { Oswald } from "next/font/google";
import Image from "next/image";
import PhotoGallery from "./components/PhotoGallery";

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
        <h1 className="absolute lg:text-7xl md:text-5xl text-2xl font-main">Welcome to my photography stuff</h1>
      </div>

      <section className="flex flex-col items-center justify-center mt-7 gap-2">
        <h2 className="text-2xl md:text-5xl lg:text-7xl font-main">Some of my Favorites</h2>
        
        <PhotoGallery photos={photos}/>
      </section>

      <section>
        Hello
      </section>

    
    </>
  );
}
