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
    {photo: "/CommHillRed.jpg", category: "Misc", name: "Communication Hill Street"},
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
    {photo: "/BlackCar.jpg", category: "Car", name: "Subaru BRZ"},
    {photo: "/BlackCar2.jpg", category: "Car", name: "Subaru BRZ"},
    {photo: "/EpicCar.jpg", category: "Car", name: "Nissan Skyline GT-R R34"},
    {photo: "/EpicCar2.jpg", category: "Car", name: "Nissan Skyline GT-R R34"},
    {photo: "/GasStation.jpg", category: "Car", name: "Gas Station on Tully Rd"},
    {photo: "/RedCarEngine.jpg", category: "Car", name: "Engine"},
    {photo: "/RedCarReflect.jpg", category: "Car", name: "Red Car Cool :o"},
    {photo: "/BlueEngine.jpg", category: "Car", name: "Engine"},
    {photo: "/Engine2.jpg", category: "Car", name: "Engine"},
    {photo: "/GT-R-R33-Back.jpg", category: "Car", name: "Nissan GT-R R33"},
    {photo: "/GT-R-R33-Front.jpg", category: "Car", name: "Nissan GT-R R33"},
    {photo: "/GT-R-R33-FrontAngled.jpg", category: "Car", name: "Nissan GT-R R33"},
    {photo: "/HondaPreludeRed.jpg", category: "Car", name: "Honda Prelude"},
    {photo: "/Motorcycle.jpg", category: "Car", name: "Motorcycle"},
    {photo: "/MotorcycleAngle.jpg", category: "Car", name: "Motorcycle"},
    {photo: "/NissanBack.jpg", category: "Car", name: "Nissan GT-R R33"},
    {photo: "/NissanFrontAngle.jpg", category: "Car", name: "Nissan GT-R R33"},
    {photo: "/SteeringWheel.jpg", category: "Car", name: "Steering Wheel"},
    {photo: "/Wheel.jpg", category: "Car", name: "Wheel"},
    {photo: "/NissanWheelAngle.jpg", category: "Car", name: "Nissan GT-R R33"},
    {photo: "/NissanPortrait.jpg", category: "Car", name: "Nissan GT-R R33"},
    {photo: "/TimoandCardin.jpg", category: "Human", name: "Timo and Cardin"},
    {photo: "/Kris8Ball.jpg", category: "Human", name: "Kris"},
    {photo: "/CopCar.jpg", category: "Car", name: "Somebody getting slimed"},
    {photo: "/Aarnav8Ball.jpg", category: "Human", name: "Aarnav"},
    {photo: "/SickShot.jpg", category: "Human", name: "Sick Shot"},
    {photo: "/Troy.jpg", category: "Human", name: "Troy"},
    {photo: "/Emily.jpg", category: "Human", name: "Sick Shot"},
    {photo: "/Kris8Ball2.jpg", category: "Human", name: "Kris"},
    {photo: "/Sai.jpg", category: "Human", name: "Sai"},
    {photo: "/SickShot.jpg", category: "Human", name: "Sick Shot"},
    {photo: "/Ronald.jpg", category: "Human", name: "Ronald"},
    {photo: "/SeabassTheThinker.jpg", category: "Human", name: "Seabass the Thinker"},
    {photo: "/SeabassStanding.jpg", category: "Human", name: "Seabass Aura Farming"},
    {photo: "/RandomCar.jpg", category: "Car", name: "Random Car"},
    {photo: "/DJ.jpg", category: "Human", name: "DJ"},
    {photo: "/Jimmy.jpg", category: "Misc", name: "Jimmy 8-Ball"},
    {photo: "/Coke.jpg", category: "Misc", name: "Coke Ad"},
    {photo: "/1.jpg", category: "Misc", name: "1"},
    {photo: "/RedandWhite.jpg", category: "Misc", name: "Red and White Ball"},
    {photo: "/NasirShot.jpg", category: "Human", name: "Nasir Shot"},
    {photo: "/NasirBackShot.jpg", category: "Human", name: "Nasir Back Shot (Pause)"},
    {photo: "/Katana.jpg", category: "Misc", name: "Katana"},
    {photo: "/Squirel.jpg", category: "Misc", name: "SQUIRELL"},
    {photo: "/MoreSquirel.jpg", category: "Misc", name: "MORE SQUIRELL"},
    {photo: "/JapaneseText.jpg", category: "Misc", name: "Japanese Excerpt"},
    {photo: "/OverSaturated.jpg", category: "Misc", name: "Too Green"},
    {photo: "/RedBuilding.jpg", category: "Misc", name: "Building"},
    {photo: "/JapanesePond.jpg", category: "Misc", name: "Pond"},
    {photo: "/CoolBuilding.jpg", category: "Misc", name: "Cool Building"},
    {photo: "/Symmetry.jpg", category: "Misc", name: "Symmetry"},
    {photo: "/SeabassStanding2.jpg", category: "Human", name: "Seabass"},
    {photo: "/EmilyDriving.jpg", category: "Car", name: "Emily Driving to our Doom"},
    {photo: "/CarLongExposure.jpg", category: "Misc", name: "Vroom"},

    
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