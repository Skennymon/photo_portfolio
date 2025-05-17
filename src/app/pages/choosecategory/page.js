'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PhotoGallery from '@/app/components/PhotoGallery'
import { photos } from '@/lib/photos'
export default function Portfolio() {

    const[selectedButton, setSelectedButton] = useState(0)

    const handleClick = (buttonId) => {
        setSelectedButton(buttonId)
    }
    
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