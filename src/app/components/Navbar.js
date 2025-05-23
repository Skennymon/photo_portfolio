'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useClickAway } from "@uidotdev/usehooks"
function Navbar() {

    const[dropDown, setDropdown] = useState(false);
    const ref = useClickAway(() => {
        setDropdown(false);
    })

    return (
        <>
            <nav className="grid grid-cols-3 border border-neutral-700 rounded-sm p-4 font-main items-center">
                
                <div className="p-1 rounded-md relative w-10 h-10 lg:w-32 lg:h-32 md:w-20 md:h-20">
                    <Link href="/">
                        <Image src="/camera.svg" alt="Camera" fill={true}/>
                    </Link>
                </div>
                
                <h1 className="md:text-7xl sm:text-5xl p-2 text-center">Kenny Photo Portfolio</h1>
                
                <div className="p-1 rounded-md relative w-10 h-10 lg:w-32 lg:hidden md:hidden md:h-16 justify-self-end" ref={ref}>
                    <button className="cursor-pointer" onClick={() => setDropdown(!dropDown)}>
                        <Image src="/hamburger.svg" alt="Hamburger Menu" fill={true}/>
                    </button>
                    <ul className={`flex flex-col border gap-4 w-56 absolute top-10 right-2 rounded-2xl items-center justify-center p-5 bg-gray-950 border-gray-600 shadow-gray-600 shadow transition-all duration-75 ease-in-out z-1 ${dropDown ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                        <Link href="/pages/about" onClick={() => {setDropdown(false)}}>About me</Link>
                        <Link href="/pages/contactme" onClick={() => setDropdown(false)}>Contact Me</Link>
                    </ul>
                </div>

                <div className="hidden md:flex md:items-center md:justify-end gap-7">
                    <Link className="lg:text-4xl md:text-[20px]" href="/pages/about">Contact</Link>
                    <Link className="lg:text-4xl md:text-[20px]" href="/pages/contactme">About Me</Link>
                </div>
                
            </nav>
        </>
    )


}

export default Navbar;