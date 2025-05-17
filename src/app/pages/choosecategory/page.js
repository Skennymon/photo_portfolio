'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PhotoGallery from '@/app/components/PhotoGallery'
export default function Portfolio() {

    const[selectedButton, setSelectedButton] = useState(0)

    const handleClick = (buttonId) => {
        setSelectedButton(buttonId)
    }

    const photos = [
    {photo: "/KennyAuraFarming.jpg", category: "Human", name: "Blud think he's an aura farmer"},
    {photo: "/TheBoys.jpg", category: "Human", name: "The Boys"},
    {photo: "/CardinStairs.jpg", category: "Human", name: "Cardin"},
    {photo: "/CarLongExposure.jpg", category: "Long Exposure", name: "Car look cool hehe"},
    {photo: "/NavidAuraFarming.jpg", category: "Human", name: "Bro IS an aura farmer"},
    {photo: "/CommHillRed.jpg", category: "Car", name: "Communication Hill Street"},
    {photo: "/PersonOnStairs.jpg", category: "Human", name: "Cardin"},
    {photo: "/NavidFlex.jpg", category: "Human", name: "Navid big boy"},
    {photo: "/Brian.jpg", category: "Human", name: "Brian"},
    {photo: "/TroyMewing.jpg", category: "Human", name: "Troy Mewing"},
    {photo: "/SeabassAuraFarming.jpg", category: "Human", name: "Seabass Aura Farming"},
    {photo: "/Shiba.jpg", category: "Misc", name: "Shiba!"},
    {photo: "/SFStreet.jpg", category: "Car", name: "Street next to Golden Gate Park"},
    {photo: "/JapaneseBuilding.jpg", category: "Misc", name: "Japanese Tea Garden Architecture"},
    {photo: "/TimothyAuraFarming.jpg", category: "Human", name: "Timothy Aura Farming"},
    {photo: "/NasirAndAarnav.jpg", category: "Human", name: "Nasir Aura Farming"},
  ];

    return (
        <>
            <section className="flex flex-col items-center justify-center mt-[20px]">
                <h1 className="text-4xl font-main">Kenny&apos;s Portfolio</h1>
                <div className="flex items-center justify-center gap-2 mt-2">
                    <button className={selectedButton === 0 ? "underline font-main text-2xl cursor-pointer" : "font-main text-2xl cursor-pointer"} onClick={() => handleClick(0)}>Cars</button>
                    <button className={selectedButton === 1 ? "underline font-main text-2xl cursor-pointer" : "font-main text-2xl cursor-pointer"} onClick={() => handleClick(1)}>Humans</button>
                    <button className={selectedButton === 2 ? "underline font-main text-2xl cursor-pointer" : "font-main text-2xl cursor-pointer"} onClick={() => handleClick(2)}>Misc.</button>
                </div>
            </section>

            {selectedButton === 0 && <PhotoGallery photos={photos} category="Car"/>}
            {selectedButton === 1 && <PhotoGallery photos={photos} category="Human"/>}
            {selectedButton === 2 && <PhotoGallery photos={photos} category="Misc"/>}
            
        </>
    )
}