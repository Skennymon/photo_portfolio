import Image from "next/image"
import Link from "next/link"
function Navbar() {

    return (
        <>
            <nav className="grid grid-cols-3 border border-neutral-700 rounded-sm p-4 font-main items-center">
                
                <div className="p-1 rounded-md relative w-10 h-10 lg:w-32 lg:h-32 md:w-20 md:h-20">
                    <Link href="/">
                        <Image src="/camera.svg" alt="Camera" fill={true}/>
                    </Link>
                </div>
                
                <h1 className="md:text-7xl sm:text-5xl p-2 text-center">Kenny Photo Portfolio</h1>
                
                <div className="p-1 rounded-md relative w-10 h-10 lg:w-32 lg:hidden md:hidden md:h-16 justify-self-end">
                    <Image src="/hamburger.svg" alt="Hamburger Menu" fill={true}/>
                </div>

                <div className="hidden md:flex md:items-center md:justify-end gap-7">
                    <Link className="lg:text-4xl md:text-[20px]" href="/pages/about">Contact</Link>
                    <Link className="lg:text-4xl md:text-[20px]" href="/pages/about">About Me</Link>
                    <Link className="lg:text-4xl md:text-[20px]" href="/pages/about">Incquires</Link>
                </div>
                
            </nav>
        </>
    )


}

export default Navbar;